import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'mitt-poeng',
  title: 'Mitt poeng — tenk større',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Mitt poeng</div>
      <h1 class="statement-text">
        Tenk <span class="gradient-text">større</span> rundt hvert chatbot-prosjekt.
      </h1>
      <p class="statement-sub">
        Ikke bare enda en OK chatbot.
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
