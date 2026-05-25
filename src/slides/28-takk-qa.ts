import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'qa',
  title: 'Takk',
  render: () => `
    <section class="slide is-muted hero">
      <img class="slide-watermark" src="/logos/logo-frontkom-symbol-outlined.svg" alt="" style="opacity:0.4;" />
      <h1 class="hero-text" style="color:var(--fg);">
        <span class="gradient-text">Takk.</span>
      </h1>
      <p class="hero-sub" style="color:var(--fg-muted);">
        Per André Rønsen · Frontkom · perandre@frontkom.com
      </p>
    </section>
  `,
};

export default slide;
