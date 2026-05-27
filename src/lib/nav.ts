import { createSync, type PresentationState, type Sync } from './sync';
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

  // ---------- Auto-advance session ----------
  const totalDurationSec = slides.reduce(
    (sum, s) => sum + (s.durationSec ?? DEFAULT_DURATION_SEC),
    0
  );

  // All timestamps are Date.now() so we can share with another window.
  const session = {
    startedAtMs: 0,
    slideStartedAtMs: 0,
    paused: false,
    /** When paused, holds elapsed-on-slide at the moment of pause. */
    pausedSlideElapsedMs: 0,
    /** When paused, holds elapsed-of-session at the moment of pause. */
    pausedSessionElapsedMs: 0,
    /** When paused, when did the pause begin (Date.now()) — used to shift starts on resume. */
    pauseStartedAtMs: 0,
    slideTimer: 0,
    countdownTimer: 0,
  };

  // ---------- Cross-window sync (speaker notes) ----------
  const sync: Sync = createSync();

  function buildState(): PresentationState {
    return {
      currentIndex: index,
      totalSlides: slides.length,
      slides: slides.map((s) => ({
        id: s.id,
        title: s.title,
        durationSec: s.durationSec ?? DEFAULT_DURATION_SEC,
      })),
      sessionStartedAtMs: session.startedAtMs,
      slideStartedAtMs: session.slideStartedAtMs,
      totalDurationSec,
      paused: session.paused,
      slideElapsedMsAtPause: session.paused ? session.pausedSlideElapsedMs : undefined,
      sessionElapsedMsAtPause: session.paused ? session.pausedSessionElapsedMs : undefined,
    };
  }

  function publishState() {
    sync.publish({ kind: 'state', payload: buildState() });
  }

  // Respond to state requests and commands from the speaker window
  sync.onMessage((msg) => {
    if (msg.kind === 'request-state') {
      publishState();
      return;
    }
    if (msg.kind === 'cmd') {
      switch (msg.action) {
        case 'next':
          next();
          break;
        case 'prev':
          prev();
          break;
        case 'toggle-pause':
          if (sessionIsActive()) togglePause();
          else next();
          break;
        case 'start':
          go(0);
          restartSession();
          break;
        case 'goto':
          go(msg.index);
          break;
      }
    }
  });

  function sessionIsActive(): boolean {
    return session.startedAtMs > 0;
  }

  function scheduleAdvance() {
    clearTimeout(session.slideTimer);
    session.slideTimer = 0;
    if (!sessionIsActive() || session.paused) return;
    if (index >= slides.length - 1) return;
    const dur = (slides[index].durationSec ?? DEFAULT_DURATION_SEC) * 1000;
    const elapsed = Date.now() - session.slideStartedAtMs;
    const remaining = Math.max(0, dur - elapsed);
    session.slideTimer = window.setTimeout(() => {
      session.slideTimer = 0;
      next();
    }, remaining);
  }

  // Session ticking is needed only to drive auto-advance (setTimeout) — the
  // numerical countdown is shown in the speaker window, not on the main slide.
  function updateCountdown() {
    // No-op: kept as a tick point in case we want to react to session state.
  }

  function startSession() {
    stopSession();
    const now = Date.now();
    session.startedAtMs = now;
    session.slideStartedAtMs = now;
    session.paused = false;
    session.pausedSlideElapsedMs = 0;
    session.pausedSessionElapsedMs = 0;
    session.pauseStartedAtMs = 0;
    session.countdownTimer = window.setInterval(updateCountdown, 500);
    updateCountdown();
    scheduleAdvance();
    publishState();
  }

  function stopSession() {
    clearTimeout(session.slideTimer);
    clearInterval(session.countdownTimer);
    session.slideTimer = 0;
    session.countdownTimer = 0;
    session.startedAtMs = 0;
    session.slideStartedAtMs = 0;
    session.paused = false;
    session.pauseStartedAtMs = 0;
    updateCountdown();
    publishState();
  }

  function restartSession() {
    stopSession();
    startSession();
  }

  function togglePause() {
    if (!sessionIsActive()) return;
    if (session.paused) {
      // RESUME — shift starts forward by pause duration so elapsed math stays correct
      const pauseDuration = Date.now() - session.pauseStartedAtMs;
      session.startedAtMs += pauseDuration;
      session.slideStartedAtMs += pauseDuration;
      session.paused = false;
      session.pauseStartedAtMs = 0;
      session.pausedSlideElapsedMs = 0;
      session.pausedSessionElapsedMs = 0;
      scheduleAdvance();
      updateCountdown();
      publishState();
    } else {
      // PAUSE — freeze elapsed values and cancel the slide timer
      clearTimeout(session.slideTimer);
      session.slideTimer = 0;
      const now = Date.now();
      session.pausedSlideElapsedMs = now - session.slideStartedAtMs;
      session.pausedSessionElapsedMs = now - session.startedAtMs;
      session.pauseStartedAtMs = now;
      session.paused = true;
      updateCountdown();
      publishState();
    }
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
    // Reset slide start time and reschedule any per-slide timer
    if (sessionIsActive()) {
      session.slideStartedAtMs = Date.now();
      if (session.paused) {
        // If we navigated while paused, reset the frozen slide-elapsed to zero
        session.pausedSlideElapsedMs = 0;
        // Pause start stays as-is (we still want session totals to freeze)
      } else {
        scheduleAdvance();
      }
    }
    publishState();
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

  function openSpeakerWindow() {
    window.open('/speaker.html', 'aiplus-speaker', 'width=800,height=900');
  }

  document.addEventListener('keydown', (e) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
    switch (e.key) {
      case 'ArrowRight':
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
      case ' ':
        // Spacebar: pause/resume autoplay. If no session active yet, skip ahead.
        e.preventDefault();
        if (sessionIsActive()) togglePause();
        else next();
        break;
      case 'Home':
        e.preventDefault();
        go(0);
        break;
      case 'End':
        e.preventDefault();
        go(slides.length - 1);
        break;
      case 's':
      case 'S':
        e.preventDefault();
        openSpeakerWindow();
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

  window.addEventListener('beforeunload', () => sync.close());

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
