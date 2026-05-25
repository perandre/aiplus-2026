import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'illustrasjon-5-agenter',
  title: 'Illustrasjon: 5 fagagenter',
  render: () => `
    <section class="slide">
      <div class="eyebrow">Slik ser det ut</div>
      <h2 class="h1">Én chatbot. <span class="gradient-text">Fem spesialister.</span></h2>
      <div class="diagram">
        <svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NFK chatbot: orkestrator + 5 fagagenter">
          <defs>
            <linearGradient id="ovc-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#F86233"/>
              <stop offset="50%" stop-color="#BC25A9"/>
              <stop offset="100%" stop-color="#521CE4"/>
            </linearGradient>
            <filter id="ovc-soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>

          <!-- Innbygger -->
          <g class="ovc-node">
            <rect x="40" y="200" width="160" height="80" rx="20" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)"/>
            <text x="120" y="235" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="18">Innbygger</text>
            <text x="120" y="258" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="13">nfk.no</text>
          </g>

          <!-- Orkestrator -->
          <g class="ovc-node">
            <circle cx="420" cy="240" r="80" fill="url(#ovc-grad)" filter="url(#ovc-soft)" opacity="0.55"/>
            <circle cx="420" cy="240" r="68" fill="#1A0054" stroke="url(#ovc-grad)" stroke-width="3"/>
            <text x="420" y="232" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="18">Orkestrator</text>
            <text x="420" y="256" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">ruter til riktig agent</text>
          </g>

          <!-- Innbygger → Orkestrator linje -->
          <path d="M 200 240 C 280 240, 320 240, 352 240" stroke="rgba(255,255,255,0.4)" stroke-width="2" fill="none"/>

          <!-- Orkestrator → 5 agenter linjer -->
          <path d="M 488 210 C 580 170, 660 90, 760 65" stroke="#F86233" stroke-width="2" fill="none" opacity="0.7"/>
          <path d="M 488 225 C 580 200, 660 165, 760 155" stroke="#DA446E" stroke-width="2" fill="none" opacity="0.7"/>
          <path d="M 488 240 C 580 240, 660 240, 760 245" stroke="#BC25A9" stroke-width="2" fill="none" opacity="0.7"/>
          <path d="M 488 255 C 580 285, 660 320, 760 335" stroke="#861FCB" stroke-width="2" fill="none" opacity="0.7"/>
          <path d="M 488 270 C 580 320, 660 400, 760 425" stroke="#521CE4" stroke-width="2" fill="none" opacity="0.7"/>

          <!-- Agent 1: Vgs opplæring -->
          <g class="ovc-node">
            <rect x="760" y="30" width="220" height="70" rx="18" fill="rgba(248,98,51,0.12)" stroke="#F86233"/>
            <text x="870" y="60" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="16">Vgs opplæring</text>
            <text x="870" y="82" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">eier: Vgs-avdelingen</text>
          </g>
          <!-- Agent 2: Tannhelse -->
          <g class="ovc-node">
            <rect x="760" y="120" width="220" height="70" rx="18" fill="rgba(218,68,110,0.12)" stroke="#DA446E"/>
            <text x="870" y="150" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="16">Tannhelse</text>
            <text x="870" y="172" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">eier: Tannhelse-avdelingen</text>
          </g>
          <!-- Agent 3: Samferdsel -->
          <g class="ovc-node">
            <rect x="760" y="210" width="220" height="70" rx="18" fill="rgba(188,37,169,0.12)" stroke="#BC25A9"/>
            <text x="870" y="240" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="16">Samferdsel</text>
            <text x="870" y="262" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">eier: Samferdsel-avdelingen</text>
          </g>
          <!-- Agent 4: Tilskudd -->
          <g class="ovc-node">
            <rect x="760" y="300" width="220" height="70" rx="18" fill="rgba(134,31,203,0.12)" stroke="#861FCB"/>
            <text x="870" y="330" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="16">Tilskudd</text>
            <text x="870" y="352" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">eier: Tilskudd-avdelingen</text>
          </g>
          <!-- Agent 5: Reis Nordland (kollektiv) -->
          <g class="ovc-node">
            <rect x="760" y="390" width="220" height="70" rx="18" fill="rgba(82,28,228,0.12)" stroke="#521CE4"/>
            <text x="870" y="420" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="16">Reis Nordland</text>
            <text x="870" y="442" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">kollektiv · samme plattform</text>
          </g>
        </svg>
      </div>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
  onMount(root) {
    const nodes = root.querySelectorAll<SVGGElement>('.ovc-node');
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
