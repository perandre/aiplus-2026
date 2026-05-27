/**
 * Cross-window sync over BroadcastChannel — used to mirror presentation
 * state from the main slide window to a speaker-notes window.
 *
 * Timestamps are wall-clock Date.now() so both windows can compute live
 * countdowns without sharing a clock.
 */

const CHANNEL_NAME = 'aiplus-2026';

export interface SlideSummary {
  id: string;
  title: string;
  durationSec: number;
}

export interface PresentationState {
  currentIndex: number;
  totalSlides: number;
  slides: SlideSummary[];
  /** Date.now() when session was started. 0 if no active session. */
  sessionStartedAtMs: number;
  /** Date.now() when current slide began displaying (with pause-shifts applied). */
  slideStartedAtMs: number;
  totalDurationSec: number;
  paused: boolean;
  /** When paused, the per-slide elapsed time is frozen at this value (ms). */
  slideElapsedMsAtPause?: number;
  /** When paused, the total-session elapsed time is frozen at this value (ms). */
  sessionElapsedMsAtPause?: number;
}

export type SyncMessage =
  | { kind: 'state'; payload: PresentationState }
  | { kind: 'request-state' };

export interface Sync {
  publish: (msg: SyncMessage) => void;
  onMessage: (handler: (msg: SyncMessage) => void) => () => void;
  close: () => void;
}

export function createSync(): Sync {
  const channel = new BroadcastChannel(CHANNEL_NAME);
  return {
    publish(msg) {
      channel.postMessage(msg);
    },
    onMessage(handler) {
      const fn = (e: MessageEvent<SyncMessage>) => handler(e.data);
      channel.addEventListener('message', fn);
      return () => channel.removeEventListener('message', fn);
    },
    close() {
      channel.close();
    },
  };
}
