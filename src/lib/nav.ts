import type { Slide } from './slide';

export interface NavController {
  go(index: number): void;
  next(): void;
  prev(): void;
  current(): number;
  total(): number;
}

const DEFAULT_DURATION_SEC = 30;

export function createNav(slides: Slide[], stage: HTMLElement): NavController {
  let index = 0;
  let cleanup: (() => void) | undefined;

  const prevBtn = document.getElementById('prev') as HTMLButtonElement;
  const nextBtn = document.getElementById('next') as HTMLButtonElement;
  const counter = document.getElementById('counter') as HTMLElement;
  const progressBar = document.getElementById('progress-bar') as HTMLElement;
  const sessionTimerEl = document.getElementById('session-timer') as HTMLElement;

  // ---------- Auto-advance session ----------
  const totalDurationSec = slides.reduce(
    (sum, s) => sum + (s.durationSec ?? DEFAULT_DURATION_SEC),
    0
  );

  const session = {
    startedAt: 0,           // performance.now() when session started
    slideTimer: 0,          // setTimeout id for current slide auto-advance
    countdownTimer: 0,      // setInterval id for visual countdown
  };

  function sessionIsActive(): boolean {
    return session.startedAt > 0;
  }

  function scheduleAdvance() {
    clearTimeout(session.slideTimer);
    if (!sessionIsActive()) return;
    if (index >= slides.length - 1) return; // don't advance past last slide
    const dur = (slides[index].durationSec ?? DEFAULT_DURATION_SEC) * 1000;
    session.slideTimer = window.setTimeout(() => {
      session.slideTimer = 0;
      next();
    }, dur);
  }

  function updateCountdown() {
    if (!sessionIsActive()) {
      sessionTimerEl.textContent = '';
      sessionTimerEl.classList.remove('is-active');
      return;
    }
    const elapsedSec = (performance.now() - session.startedAt) / 1000;
    const remaining = Math.max(0, totalDurationSec - elapsedSec);
    const mins = Math.floor(remaining / 60);
    const secs = Math.floor(remaining % 60);
    sessionTimerEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    sessionTimerEl.classList.add('is-active');
    // Warning tone when under 2 min
    sessionTimerEl.classList.toggle('is-low', remaining < 120);
    sessionTimerEl.classList.toggle('is-out', remaining <= 0);
  }

  function startSession() {
    stopSession();
    session.startedAt = performance.now();
    session.countdownTimer = window.setInterval(updateCountdown, 1000);
    updateCountdown();
    scheduleAdvance();
  }

  function stopSession() {
    clearTimeout(session.slideTimer);
    clearInterval(session.countdownTimer);
    session.slideTimer = 0;
    session.countdownTimer = 0;
    session.startedAt = 0;
    updateCountdown();
  }

  function restartSession() {
    stopSession();
    startSession();
  }

  // ---------- Slide rendering & navigation ----------
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
    // Always re-schedule the per-slide timer (cancels any previous one)
    scheduleAdvance();
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
        // On slide 1: ensure fullscreen + (re)start the session timer.
        // On any other slide: standard fullscreen toggle, leave session alone.
        if (index === 0) {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
          }
          restartSession();
        } else {
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            document.documentElement.requestFullscreen().catch(() => {});
          }
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
