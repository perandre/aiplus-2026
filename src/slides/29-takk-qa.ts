import { particleLayer } from '../lib/particles';
import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'qa',
  title: 'Takk',
  render: () => `
    <section class="slide is-muted hero finale">
      ${particleLayer(16)}
      <img class="slide-watermark watermark-spin" src="/logos/logo-frontkom-symbol-outlined.svg" alt="" />
      <div style="position:relative;z-index:2;text-align:center;">
        <h1 class="hero-text takk-shine" style="color:var(--fg);">
          <span class="gradient-text">Takk.</span>
        </h1>
        <p class="hero-sub" style="color:var(--fg-muted);">
          Per André Rønsen · Frontkom · perandre@frontkom.com
        </p>
      </div>
    </section>
  `,
};

export default slide;
