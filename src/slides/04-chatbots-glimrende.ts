import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'chatbots-glimrende',
  title: 'Hvorfor chatbot',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Hvorfor chatbot</div>
      <h1 class="statement-text">
        Chatbots er (fortsatt) et <span class="gradient-text">glimrende grensesnitt</span> for generativ KI.
      </h1>
      <p class="statement-sub">
        Umiddelbar verdi til innbyggere og ansatte.
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
