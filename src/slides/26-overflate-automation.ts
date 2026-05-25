import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'overflate-automation',
  title: 'Overflate: Automatiseringsflyt',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Overflate 5 · Automatiseringsflyt</div>
      <h1 class="statement-text">Når svaret <span class="gradient-text">blir til handling</span>.</h1>
      <p class="statement-sub">
        Innbyggeren spør om en søknad — boten henter status, oppdaterer adresse,
        sender e-post på vegne av saksbehandleren. Samme kunnskapsgrunnlag,
        nye føtter.
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
