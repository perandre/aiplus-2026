import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'take-aways',
  title: 'Når dere implementerer chatbot',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Når dere implementerer chatbot:</div>
      <h1 class="statement-text">
        Lag et KI-lag for hele brukerreisen —<br/>
        <span class="gradient-text">og gjenbruk i flere kanaler</span>.
      </h1>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
