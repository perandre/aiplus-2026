import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'chatbots-glimrende',
  title: 'Chatbots er glimrende bruk av generativ KI',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Og det er ikke feil</div>
      <h1 class="statement-text">
        Chatbots er <span class="gradient-text">glimrende bruk</span><br/>
        av generativ KI.
      </h1>
      <p class="statement-sub">
        Umiddelbar verdi til innbyggere og ansatte.
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
