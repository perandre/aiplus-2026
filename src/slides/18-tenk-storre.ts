import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'tenk-storre',
  title: 'Tenk større',
  render: () =>
    `<section class="slide hero">
      <h1 class="hero-text">Tenk <span class="gradient-text">større</span>.</h1>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>`,
};

export default slide;
