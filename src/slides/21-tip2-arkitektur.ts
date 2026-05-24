import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'tip2-arkitektur',
  title: 'Orkestrator + 4 agenter',
  render: () => `
    <section class="slide">
      <div class="eyebrow">Tips 2 · Slik ser det ut</div>
      <h2 class="h1">Én orkestrator. <span class="gradient-text">Mange spesialister.</span></h2>
      <div class="diagram">
        <svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arkitekturdiagram">
          <defs>
            <linearGradient id="ark-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#F86233"/>
              <stop offset="50%" stop-color="#BC25A9"/>
              <stop offset="100%" stop-color="#521CE4"/>
            </linearGradient>
            <filter id="ark-soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>

          <g class="ark-node">
            <rect x="40" y="200" width="160" height="80" rx="20" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)"/>
            <text x="120" y="235" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="18">Innbygger</text>
            <text x="120" y="258" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="13">nfk.no</text>
          </g>

          <g class="ark-node">
            <circle cx="420" cy="240" r="80" fill="url(#ark-grad)" filter="url(#ark-soft)" opacity="0.55"/>
            <circle cx="420" cy="240" r="68" fill="#1A0054" stroke="url(#ark-grad)" stroke-width="3"/>
            <text x="420" y="232" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="18">Orkestrator</text>
            <text x="420" y="256" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">ruter til riktig agent</text>
          </g>

          <path d="M 200 240 C 280 240, 320 240, 352 240" stroke="rgba(255,255,255,0.4)" stroke-width="2" fill="none"/>
          <path d="M 488 200 C 580 160, 660 100, 760 90" stroke="#F86233" stroke-width="2" fill="none" opacity="0.7"/>
          <path d="M 488 220 C 580 210, 660 195, 760 190" stroke="#DA446E" stroke-width="2" fill="none" opacity="0.7"/>
          <path d="M 488 260 C 580 270, 660 285, 760 290" stroke="#861FCB" stroke-width="2" fill="none" opacity="0.7"/>
          <path d="M 488 280 C 580 320, 660 380, 760 390" stroke="#521CE4" stroke-width="2" fill="none" opacity="0.7"/>

          <g class="ark-node">
            <rect x="760" y="50" width="200" height="80" rx="20" fill="rgba(248,98,51,0.12)" stroke="#F86233"/>
            <text x="860" y="85" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="16">Vgs opplæring</text>
          </g>
          <g class="ark-node">
            <rect x="760" y="150" width="200" height="80" rx="20" fill="rgba(218,68,110,0.12)" stroke="#DA446E"/>
            <text x="860" y="185" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="16">Tannhelse</text>
          </g>
          <g class="ark-node">
            <rect x="760" y="250" width="200" height="80" rx="20" fill="rgba(134,31,203,0.12)" stroke="#861FCB"/>
            <text x="860" y="285" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="16">Samferdsel</text>
          </g>
          <g class="ark-node">
            <rect x="760" y="350" width="200" height="80" rx="20" fill="rgba(82,28,228,0.12)" stroke="#521CE4"/>
            <text x="860" y="385" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="16">Tilskudd</text>
          </g>
        </svg>
      </div>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
  onMount(root) {
    const nodes = root.querySelectorAll<SVGGElement>('.ark-node');
    nodes.forEach((n, i) => {
      n.style.opacity = '0';
      n.style.transform = 'translateY(8px)';
      n.style.transition = 'opacity 380ms ease, transform 380ms cubic-bezier(0.2,0.8,0.2,1)';
      setTimeout(() => {
        n.style.opacity = '1';
        n.style.transform = 'none';
      }, 240 + i * 140);
    });
  },
};

export default slide;
