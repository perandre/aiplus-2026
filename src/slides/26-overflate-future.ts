import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'overflate-future',
  title: 'Voice og intern bot',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Overflater 5 og 6 — i morgen</div>
      <h1 class="statement-text">
        <span class="gradient-text">Voice</span>-bot på telefon.
        <span class="gradient-text">Intern</span>-bot for saksbehandlere.
      </h1>
      <p class="statement-sub">
        Samme kunnskapsgrunnlag. Andre brukere. Annen tilgangsstyring.
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
