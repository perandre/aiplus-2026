import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'personvern-section',
  title: 'Personvern først',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Suksessfaktor 3</div>
      <h1 class="statement-text">
        Personvern <span class="gradient-text">først</span>.
      </h1>
      <p class="statement-sub">
        Kortversjon: Følg veilederen fra DigDir.
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
