import { slideShell, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'om-frontkom',
  title: 'Om Frontkom',
  render: () =>
    slideShell(
      `
      <div class="eyebrow">Om Frontkom</div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:var(--s-lg);">
        <img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" style="height:clamp(60px,9cqh,120px);width:auto;align-self:flex-start;" />
        <p class="lead" style="margin-top:var(--s-xl);">
          Digitalbyrå som leverer KI-løsninger til offentlig sektor og bedrifter —<br/>
          fra digitale medarbeidere til automatisering.
        </p>
      </div>
      `,
      { logo: false }
    ),
};

export default slide;
