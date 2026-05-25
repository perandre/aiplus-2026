import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'reis-nordland-intro',
  title: 'Hovedcase: Reis Nordland',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Hovedcase</div>
      <h1 class="statement-text">
        <span class="gradient-text">Reis Nordland</span>.
      </h1>
      <p class="statement-sub">
        Vant offentlig anbud på chatbot.
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
