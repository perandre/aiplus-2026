import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'datadrevet-innsikt',
  title: 'Datadrevet innsiktsprosess',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Suksessfaktor 2</div>
      <h1 class="statement-text">
        Datadrevet <span class="gradient-text">innsiktsprosess</span>.
      </h1>
      <p class="statement-sub">
        Kjør prosjektet som et webprosjekt.
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
