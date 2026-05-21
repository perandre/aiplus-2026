import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'trap-mistake',
  title: 'Det er det første feilgrepet.',
  render: () =>
    `<section class="slide statement">
      <h1 class="statement-text">Det er det <span class="gradient-text">første feilgrepet</span>.</h1>
      <p class="statement-sub">Ikke fordi chatboten er feil. Men fordi den er for liten en ambisjon.</p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>`,
};

export default slide;
