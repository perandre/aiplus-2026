import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'tip3-kunnskap',
  title: 'Tips 3: Bredt og kuratert kunnskap',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Tips 3 av 7</div>
      <h1 class="statement-text">Bredt, men <span class="gradient-text">kuratert</span> kunnskapsgrunnlag.</h1>
      <p class="statement-sub">Du velger hva som teller — og hva som ikke skal med.</p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
