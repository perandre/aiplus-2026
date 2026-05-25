import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'teknologisk-fleksibilitet',
  title: 'Teknologisk fleksibilitet',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Suksessfaktor 1</div>
      <h1 class="statement-text">
        Teknologisk <span class="gradient-text">fleksibilitet</span>.
      </h1>
      <p class="statement-sub">
        Hyllevare med mulighet for skreddersøm.
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
