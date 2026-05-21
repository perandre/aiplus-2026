import type { Slide } from './slide';

export interface NavController {
  go(index: number): void;
  next(): void;
  prev(): void;
  current(): number;
  total(): number;
}

export function createNav(slides: Slide[], stage: HTMLElement): NavController {
  let index = 0;
  let cleanup: (() => void) | undefined;

  const prevBtn = document.getElementById('prev') as HTMLButtonElement;
  const nextBtn = document.getElementById('next') as HTMLButtonElement;
  const counter = document.getElementById('counter') as HTMLElement;
  const progressBar = document.getElementById('progress-bar') as HTMLElement;

  function readHash(): number {
    const m = location.hash.match(/^#(\d+)/);
    if (!m) return 0;
    const n = parseInt(m[1], 10) - 1;
    return Math.max(0, Math.min(slides.length - 1, n));
  }

  function writeHash(i: number) {
    const id = slides[i]?.id ?? '';
    history.replaceState(null, '', `#${i + 1}-${id}`);
  }

  function render() {
    if (cleanup) {
      cleanup();
      cleanup = undefined;
    }
    const slide = slides[index];
    stage.innerHTML = slide.render();
    const el = stage.querySelector<HTMLElement>('.slide');
    if (el) {
      requestAnimationFrame(() => el.classList.add('is-active'));
      if (slide.onMount) {
        const result = slide.onMount(el);
        if (typeof result === 'function') cleanup = result;
      }
    }
    counter.textContent = `${index + 1} / ${slides.length}`;
    progressBar.style.width = `${((index + 1) / slides.length) * 100}%`;
    document.title = `${slide.title} — Frontkom @ AI+Offentlig sektor`;
    writeHash(index);
  }

  function go(n: number) {
    index = Math.max(0, Math.min(slides.length - 1, n));
    render();
  }

  function next() {
    if (index < slides.length - 1) go(index + 1);
  }

  function prev() {
    if (index > 0) go(index - 1);
  }

  document.addEventListener('keydown', (e) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
    switch (e.key) {
      case 'ArrowRight':
      case ' ':
      case 'PageDown':
      case 'n':
        e.preventDefault();
        next();
        break;
      case 'ArrowLeft':
      case 'PageUp':
      case 'p':
        e.preventDefault();
        prev();
        break;
      case 'Home':
        e.preventDefault();
        go(0);
        break;
      case 'End':
        e.preventDefault();
        go(slides.length - 1);
        break;
      case 'f':
      case 'F':
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          document.documentElement.requestFullscreen().catch(() => {});
        }
        break;
    }
  });

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  window.addEventListener('hashchange', () => {
    const n = readHash();
    if (n !== index) go(n);
  });

  // initial render
  index = readHash();
  render();

  return {
    go,
    next,
    prev,
    current: () => index,
    total: () => slides.length,
  };
}
