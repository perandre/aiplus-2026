import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'hero-ki-lag',
  title: 'Bygg et KI-lag for brukerreisen.',
  render: () =>
    `<section class="slide hero">
      <h1 class="hero-text">Bygg et <span class="gradient-text">KI-lag</span><br/>for brukerreisen.</h1>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>`,
};

export default slide;
