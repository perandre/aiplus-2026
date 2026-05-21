import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'hero-dont-build',
  title: 'Ikke bygg en chatbot.',
  render: () =>
    `<section class="slide hero">
      <h1 class="hero-text">Ikke bygg <span class="strike">en chatbot</span>.</h1>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>`,
};

export default slide;
