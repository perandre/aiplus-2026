import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'tip2-orkestrer',
  title: 'Tips 2: Orkestrer flere agenter',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Tips 2 av 7</div>
      <h1 class="statement-text">Orkestrer flere <span class="gradient-text">spesialister</span>.</h1>
      <p class="statement-sub">Én bot som vet litt om alt er dårlig. Flere som vet mye om noe — funker.</p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
