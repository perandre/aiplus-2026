import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'sub-agents-hint',
  title: 'Hva med agenter som snakker sammen?',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Eller …</div>
      <h1 class="statement-text">Agenter som <span class="gradient-text">snakker sammen</span>?</h1>
      <p class="statement-sub">
        Hver fagavdeling eier sin agent.<br/>
        En orkestrator velger riktig spesialist.
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
