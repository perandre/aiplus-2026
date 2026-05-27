import { slideShell, type Slide } from '../lib/slide';

// TODO: bekreft tittel + om PhD skal nevnes
const slide: Slide = {
  id: 'om-meg',
  title: 'Om meg',
  render: () =>
    slideShell(
      `
      <div class="eyebrow">Om meg</div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:var(--s-lg);">
        <h1 class="h1">Per André Rønsen</h1>
        <p class="lead" style="color:var(--on-dark-muted);">
          Head of AI · Frontkom<br/>
          PhD-kandidat hos Høgskolen i Østfold
        </p>
      </div>
      `
    ),
};

export default slide;
