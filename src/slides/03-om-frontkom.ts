import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'om-frontkom',
  title: 'Om Frontkom',
  render: () => `
    <section class="slide bg-video">
      <video class="bg-video-el" src="/media/frontkom-video.mp4" autoplay muted loop playsinline preload="auto"></video>
      <div class="bg-overlay" aria-hidden="true"></div>
      <div class="bg-content">
        <div class="eyebrow">Om Frontkom</div>
        <img class="om-frontkom-logo" src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" />
        <h2 class="om-frontkom-tag">Partner for digital vekst og KI.</h2>
      </div>
    </section>
  `,
};

export default slide;
