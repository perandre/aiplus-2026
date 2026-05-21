import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'tip5-eierskap',
  title: 'Tips 5: Distribuer eierskap',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Tips 5 av 7</div>
      <h1 class="statement-text">Eierskap <span class="gradient-text">der kunnskapen er</span>.</h1>
      <p class="statement-sub">Den som kan stoffet — vedlikeholder også boten.</p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
