import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'tips-pivot',
  title: 'Slik bygger dere det.',
  render: () => `
    <section class="slide pivot">
      <div class="eyebrow">Hvordan kommer dere dit?</div>
      <h1 class="pivot-text">Slik bygger dere det. <span class="gradient-text">7 tips.</span></h1>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
