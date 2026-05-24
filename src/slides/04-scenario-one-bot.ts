import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'scenario-one-bot',
  title: 'Scenario A — én bot for alt',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Scenario A</div>
      <h1 class="statement-text">Én bot for alt?<br/>Den blir <span class="gradient-text">ekspert på ingenting</span>.</h1>
      <p class="statement-sub">
        Tannhelse-fagavdelingen stoler ikke på den.<br/>
        Samferdsel ikke heller. Ingen eier den.
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
