import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'monitorering-section',
  title: 'Godt system for monitorering',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Suksessfaktor 4</div>
      <h1 class="statement-text">
        Godt system for <span class="gradient-text">monitorering</span>.
      </h1>
      <p class="statement-sub">
        Sikre kvalitet. Og: data er gull!
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
