import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'tip6-rammeverk',
  title: 'Tips 6: Bygg på rammeverk som vokser',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Tips 6 av 7</div>
      <h1 class="statement-text">Bygg på et rammeverk som <span class="gradient-text">vokser med dere</span>.</h1>
      <p class="statement-sub">Custom-tilpasninger — som en interaktiv ruteplanlegger inne i samtalen.</p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
