import { particleLayer } from '../lib/particles';
import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'qa',
  title: 'Takk',
  render: () => `
    <section class="slide is-muted hero finale">
      ${particleLayer(16)}
      <img class="slide-watermark watermark-spin" src="/logos/logo-frontkom-symbol-outlined.svg" alt="" />
      <div class="takk-content">
        <h1 class="hero-text takk-shine" style="color:var(--fg);">
          <span class="gradient-text">Takk.</span>
        </h1>
        <p class="takk-contact">
          <span class="takk-name">Per André Rønsen</span><br/>
          <a href="mailto:perandre@frontkom.com">perandre@frontkom.com</a>
          <span class="takk-sep">·</span>
          <a href="https://www.linkedin.com/in/perandre/" target="_blank" rel="noopener noreferrer">linkedin.com/in/perandre</a>
        </p>
      </div>
    </section>
  `,
};

export default slide;
