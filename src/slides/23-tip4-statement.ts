import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'tip4-personvern',
  title: 'Tips 4: Fjern persondata',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Tips 4 av 7 · GDPR</div>
      <h1 class="statement-text">Fjern persondata <span class="gradient-text">før LLM-en ser dem</span>.</h1>
      <p class="statement-sub">Sanitering i orkestratoren — ikke i etterkant.</p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
