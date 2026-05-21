import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'workshops',
  title: 'Hvordan komme i gang',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Slik kommer dere i gang</div>
      <h1 class="statement-text">Start <span class="gradient-text">med én workshop</span>.</h1>
      <p class="statement-sub">Henvendelser. Kilder. Risiko. Gevinsthypotese. Ett område om gangen.</p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
