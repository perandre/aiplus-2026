import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'scenario-many-bots',
  title: 'Scenario B — én per tema',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Scenario B</div>
      <h1 class="statement-text">Én bot per tema?<br/>Da blir det <span class="gradient-text">fire siloer</span>.</h1>
      <p class="statement-sub">
        Innbyggeren må vite hvem som svarer på hva.<br/>
        Overlappende svar blir inkonsistente.
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
