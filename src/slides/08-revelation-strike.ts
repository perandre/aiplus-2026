import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'revelation-strike',
  title: 'Ikke lag enda en chatbot.',
  render: () =>
    `<section class="slide hero">
      <h1 class="hero-text">Ikke lag <span class="strike">enda en chatbot</span>.</h1>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>`,
};

export default slide;
