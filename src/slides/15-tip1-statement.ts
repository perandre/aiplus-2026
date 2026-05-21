import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'tip1-dashboard',
  title: 'Tips 1: Brukervennlig dashbord',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Tips 1 av 7</div>
      <h1 class="statement-text">Bygg et <span class="gradient-text">brukervennlig dashbord</span>.</h1>
      <p class="statement-sub">For daglig monitorering — av dem som faktisk skal eie boten.</p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
