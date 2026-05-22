import { slideShell, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'cover',
  title: 'Ikke bygg en chatbot — bygg et KI-lag for hele brukerreisen',
  render: () =>
    slideShell(
      `
      <div class="gradient-bar" style="position:absolute;top:0;left:0;right:0;"></div>
      <div class="gradient-bar" style="position:absolute;bottom:0;left:0;right:0;"></div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:var(--s-xl);">
        <div class="eyebrow">AI+ Offentlig sektor · Halden · 27. mai 2026</div>
        <h1 class="hero">
          Ikke bygg en chatbot —<br/>
          bygg et <span class="gradient-text">KI-lag for hele brukerreisen</span>.
        </h1>
        <p class="lead" style="color:var(--on-dark-muted);max-width:52ch;">
          Fra Reis Nordland til hele fylket — hva skal til for at det funker?
        </p>
        <div class="row" style="margin-top:var(--s-xl);gap:var(--s-md);">
          <span class="pill pill-brand">Per André Rønsen</span>
          <span class="pill">Frontkom</span>
        </div>
      </div>
      `,
      { cover: true, logo: false }
    ),
};

export default slide;
