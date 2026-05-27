import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'finalist',
  title: 'Finalist — Dataforeningens innsiktspris',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Anerkjennelse</div>
      <h1 class="statement-text">
        Finalist — <span class="gradient-text">Dataforeningens<br/>innsiktspris</span>. 🏆
      </h1>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
