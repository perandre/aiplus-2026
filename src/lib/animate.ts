/**
 * Small animation primitives — used across slides for tasteful motion.
 */

const NB_LOCALE = 'nb-NO';

/** Animate a number from `from` → `to` over `duration` ms, written into `el.textContent`. */
export function animateNumber(
  el: HTMLElement,
  from: number,
  to: number,
  duration = 1800,
  formatter: (n: number) => string = (n) => n.toLocaleString(NB_LOCALE)
): () => void {
  let rafId = 0;
  const start = performance.now();
  function tick(now: number) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
    el.textContent = formatter(Math.round(from + (to - from) * eased));
    if (t < 1) rafId = requestAnimationFrame(tick);
  }
  rafId = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(rafId);
}

/**
 * Loop a sequence of async steps. Returns a cleanup that cancels the loop.
 * Each step receives the AbortSignal so it can interrupt cleanly.
 */
export function loop(
  steps: Array<(signal: AbortSignal) => Promise<void>>,
  options: { initialDelay?: number } = {}
): () => void {
  const controller = new AbortController();
  const signal = controller.signal;

  async function run() {
    if (options.initialDelay) await wait(options.initialDelay, signal);
    while (!signal.aborted) {
      for (const step of steps) {
        if (signal.aborted) return;
        try {
          await step(signal);
        } catch (e) {
          if ((e as Error).name === 'AbortError') return;
          throw e;
        }
      }
    }
  }
  run();
  return () => controller.abort();
}

export function wait(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(new DOMException('Aborted', 'AbortError'));
    const id = setTimeout(resolve, ms);
    signal?.addEventListener('abort', () => {
      clearTimeout(id);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });
}

/** Type a string into an element character by character. */
export async function typeText(
  el: HTMLElement,
  text: string,
  perChar = 35,
  signal?: AbortSignal
): Promise<void> {
  el.textContent = '';
  for (let i = 0; i < text.length; i++) {
    if (signal?.aborted) return;
    el.textContent += text[i];
    await wait(perChar, signal);
  }
}

/** Move an SVG element along a path. Uses path.getPointAtLength for smooth motion. */
export function animateAlongPath(
  target: SVGGraphicsElement,
  path: SVGPathElement,
  duration: number,
  signal?: AbortSignal,
  attrX = 'cx',
  attrY = 'cy'
): Promise<void> {
  return new Promise((resolve) => {
    const start = performance.now();
    const length = path.getTotalLength();
    let rafId = 0;
    function tick(now: number) {
      if (signal?.aborted) {
        cancelAnimationFrame(rafId);
        return resolve();
      }
      const t = Math.min(1, (now - start) / duration);
      // easeInOutCubic
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const pt = path.getPointAtLength(length * eased);
      target.setAttribute(attrX, String(pt.x));
      target.setAttribute(attrY, String(pt.y));
      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        resolve();
      }
    }
    rafId = requestAnimationFrame(tick);
    signal?.addEventListener('abort', () => {
      cancelAnimationFrame(rafId);
      resolve();
    });
  });
}
