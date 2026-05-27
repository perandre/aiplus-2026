import './speaker.css';
import { createSync, type PresentationState } from './lib/sync';

let state: PresentationState | null = null;

const elPos = document.querySelector<HTMLElement>('.sp-pos')!;
const elStatus = document.querySelector<HTMLElement>('.sp-status')!;
const elTitle = document.querySelector<HTMLElement>('.sp-title')!;
const elNextTitle = document.querySelector<HTMLElement>('.sp-next-title')!;
const elRingFg = document.querySelector<SVGCircleElement>('.sp-ring-fg')!;
const elRingNow = document.querySelector<HTMLElement>('.sp-ring-now')!;
const elRingOf = document.querySelector<HTMLElement>('.sp-ring-of')!;
const elProgress = document.querySelector<HTMLElement>('.sp-progress')!;
const elTotal = document.querySelector<HTMLElement>('.sp-total')!;
const elTotalValue = document.querySelector<HTMLElement>('.sp-total-value')!;

const sync = createSync();

sync.onMessage((msg) => {
  if (msg.kind === 'state') {
    state = msg.payload;
    applyMetadata();
  }
});

// Ask the main window for current state.
sync.publish({ kind: 'request-state' });

// In case the speaker window opens before main is ready, retry briefly.
let retries = 0;
const retryTimer = setInterval(() => {
  if (state) {
    clearInterval(retryTimer);
    return;
  }
  retries++;
  if (retries > 20) {
    clearInterval(retryTimer);
    elStatus.textContent = 'Ingen forbindelse — åpne hovedpresentasjonen først';
    return;
  }
  sync.publish({ kind: 'request-state' });
}, 500);

window.addEventListener('focus', () => sync.publish({ kind: 'request-state' }));
window.addEventListener('beforeunload', () => sync.close());

// Remote control: keystrokes on the speaker window become commands sent
// to the main presentation window via BroadcastChannel.
document.addEventListener('keydown', (e) => {
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
  switch (e.key) {
    case 'ArrowRight':
    case 'PageDown':
    case 'n':
      e.preventDefault();
      sync.publish({ kind: 'cmd', action: 'next' });
      break;
    case 'ArrowLeft':
    case 'PageUp':
    case 'p':
      e.preventDefault();
      sync.publish({ kind: 'cmd', action: 'prev' });
      break;
    case ' ':
      e.preventDefault();
      sync.publish({ kind: 'cmd', action: 'toggle-pause' });
      break;
    case 'f':
    case 'F':
      e.preventDefault();
      sync.publish({ kind: 'cmd', action: 'start' });
      break;
    case 'Home':
      e.preventDefault();
      sync.publish({ kind: 'cmd', action: 'goto', index: 0 });
      break;
    case 'End':
      e.preventDefault();
      if (state) sync.publish({ kind: 'cmd', action: 'goto', index: state.totalSlides - 1 });
      break;
  }
});

function applyMetadata() {
  if (!state) return;
  elPos.textContent = `Slide ${state.currentIndex + 1} / ${state.totalSlides}`;
  const cur = state.slides[state.currentIndex];
  elTitle.textContent = cur?.title ?? '—';
  const next = state.slides[state.currentIndex + 1];
  elNextTitle.textContent = next?.title ?? '— slutt —';

  const isActive = state.sessionStartedAtMs > 0;
  elStatus.classList.toggle('is-paused', state.paused);
  elStatus.classList.toggle('is-playing', isActive && !state.paused);
  if (!isActive) elStatus.textContent = 'Klar — trykk f for å starte';
  else if (state.paused) elStatus.textContent = 'Pause';
  else elStatus.textContent = 'Spiller';

  elProgress.classList.toggle('is-paused', state.paused);
  elTotal.classList.toggle('is-paused', state.paused);
}

function tick() {
  if (state && state.sessionStartedAtMs > 0) {
    const cur = state.slides[state.currentIndex];
    const slideDurMs = (cur?.durationSec ?? 30) * 1000;
    const now = Date.now();
    const slideElapsedMs = state.paused
      ? state.slideElapsedMsAtPause ?? 0
      : now - state.slideStartedAtMs;
    const sessionElapsedMs = state.paused
      ? state.sessionElapsedMsAtPause ?? 0
      : now - state.sessionStartedAtMs;

    const slideRemaining = Math.max(0, slideDurMs - slideElapsedMs);
    const progress = Math.max(0, Math.min(1, slideElapsedMs / slideDurMs));

    // Ring fill — stroke-dashoffset 100..0 (pathLength=100)
    elRingFg.style.strokeDashoffset = String(100 - progress * 100);
    elRingNow.textContent = formatMmSs(slideRemaining);
    elRingOf.textContent = `/ ${formatMmSs(slideDurMs)}`;

    const totalDurMs = state.totalDurationSec * 1000;
    const totalRemaining = Math.max(0, totalDurMs - sessionElapsedMs);
    elTotalValue.textContent = formatMmSs(totalRemaining);
    elTotal.classList.toggle('is-low', totalRemaining < 120_000 && !state.paused);
    elTotal.classList.toggle('is-out', totalRemaining <= 0);
  } else {
    elRingFg.style.strokeDashoffset = '100';
    elRingNow.textContent = '—';
    elRingOf.textContent = '/ —';
    elTotalValue.textContent = '--:--';
  }
  requestAnimationFrame(tick);
}

function formatMmSs(ms: number): string {
  const totalSec = Math.ceil(ms / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

requestAnimationFrame(tick);
