import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'inspirasjon',
  title: 'Inspirasjon — tenk større om chatbot-prosjektet',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Inspirasjon</div>
      <h1 class="statement-text">
        Tenk <span class="gradient-text">større</span><br/>
        om chatbot-prosjektet deres!
      </h1>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
