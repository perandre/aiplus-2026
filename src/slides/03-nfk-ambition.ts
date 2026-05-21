import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'nfk-ambition',
  title: 'Hele Nordland fylkeskommune',
  render: () => `
    <section class="slide">
      <div class="eyebrow">Casen · 2026</div>
      <h2 class="h1">Nå: <span class="gradient-text">hele fylket</span>.</h2>
      <div class="card-grid" style="margin-top:var(--s-xl);">
        <div class="card-dark" style="text-align:center;">
          <div class="h2" style="color:var(--g1);margin:0;">🎓</div>
          <div class="h3" style="color:var(--on-dark);margin:0;">Vgs opplæring</div>
        </div>
        <div class="card-dark" style="text-align:center;">
          <div class="h2" style="color:var(--g2);margin:0;">🦷</div>
          <div class="h3" style="color:var(--on-dark);margin:0;">Tannhelse</div>
        </div>
        <div class="card-dark" style="text-align:center;">
          <div class="h2" style="color:var(--g4);margin:0;">🚌</div>
          <div class="h3" style="color:var(--on-dark);margin:0;">Samferdsel</div>
        </div>
        <div class="card-dark" style="text-align:center;">
          <div class="h2" style="color:var(--g5);margin:0;">💰</div>
          <div class="h3" style="color:var(--on-dark);margin:0;">Tilskudd</div>
        </div>
      </div>
      <p class="lead" style="margin-top:var(--s-2xl);color:var(--on-dark-muted);">
        Fire fagområder. Helt ulike språk, prosesser og dokumenter.
        Hvordan bygger man det — uten å bygge fire chatbots?
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
