import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'nfk-5-agenter',
  title: 'NFK.no: 5 chatbot-agenter',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">NFK.no</div>
      <h1 class="statement-text">
        <span class="gradient-text">5 chatbot-agenter</span><br/>
        mot innbyggerne.
      </h1>
      <p class="statement-sub">
        Hver seksjon har sin egen kunnskapsdatabase.
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
