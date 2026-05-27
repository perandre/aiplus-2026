import { particleLayer } from '../lib/particles';
import { slideShell, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'cover',
  title: 'Hva skal til for å få en KI-chatbot som faktisk funker?',
  render: () =>
    slideShell(
      `
      ${particleLayer(28)}
      <div class="gradient-bar" style="position:absolute;top:0;left:0;right:0;"></div>
      <div class="gradient-bar" style="position:absolute;bottom:0;left:0;right:0;"></div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:var(--s-xl);position:relative;z-index:1;">
        <div class="eyebrow">AI+ Offentlig sektor · Halden · 27. mai 2026</div>
        <h1 class="hero">Hva skal til for å få en <span class="gradient-text">KI-chatbot som faktisk funker?</span></h1>
        <p class="cover-subtitle">Ikke enda en chatbot! Slik lager dere et KI-lag for hele brukerreisen ✨</p>
        <div class="cover-byline">
          <span>Per André Rønsen</span>
          <img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" />
        </div>
      </div>
      `,
      { cover: true, logo: false }
    ),
};

export default slide;
