import { animateAlongPath, loop, wait } from '../lib/animate';
import type { Slide } from '../lib/slide';

const AGENT_COLORS = ['#F86233', '#DA446E', '#BC25A9', '#861FCB', '#521CE4'];

const slide: Slide = {
  id: 'illustrasjon-5-agenter',
  title: 'Illustrasjon: 5 fagagenter',
  render: () => `
    <section class="slide">
      <div class="eyebrow">Slik ser det ut</div>
      <h2 class="h1">Én chatbot. <span class="gradient-text">Fem spesialister.</span></h2>
      <div class="diagram">
        <svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NFK chatbot: innbygger → grensesnitt → orkestrator → 5 fagagenter">
          <defs>
            <linearGradient id="ovc-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#F86233"/>
              <stop offset="50%" stop-color="#BC25A9"/>
              <stop offset="100%" stop-color="#521CE4"/>
            </linearGradient>
            <filter id="ovc-soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <filter id="msg-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <!-- Innbygger -->
          <g class="ovc-node">
            <rect x="10" y="200" width="130" height="80" rx="20" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)"/>
            <text x="75" y="235" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="17">Innbygger</text>
            <text x="75" y="258" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="13">nfk.no</text>
          </g>

          <!-- Grensesnitt -->
          <g class="ovc-node">
            <rect x="180" y="200" width="160" height="80" rx="20" fill="rgba(200,181,255,0.10)" stroke="rgba(200,181,255,0.45)"/>
            <text x="260" y="247" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="18">Grensesnitt</text>
          </g>

          <!-- Orkestrator (med pulsende halo) -->
          <g class="ovc-node">
            <circle class="orch-pulse" cx="500" cy="240" r="80" fill="url(#ovc-grad)" filter="url(#ovc-soft)" opacity="0.55"/>
            <circle cx="500" cy="240" r="68" fill="#1A0054" stroke="url(#ovc-grad)" stroke-width="3"/>
            <text x="500" y="232" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="18">Orkestrator</text>
            <text x="500" y="256" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">ruter til riktig agent</text>
          </g>

          <!-- Paths -->
          <path id="path-innbygger-grensesnitt" d="M 140 240 L 180 240" stroke="rgba(255,255,255,0.4)" stroke-width="2" fill="none"/>
          <path id="path-grensesnitt-orkestrator" d="M 340 240 L 432 240" stroke="rgba(255,255,255,0.4)" stroke-width="2" fill="none"/>
          <path id="path-agent-0" d="M 568 210 C 640 170, 700 90, 760 65" stroke="#F86233" stroke-width="2" fill="none" opacity="0.7"/>
          <path id="path-agent-1" d="M 568 225 C 640 200, 700 165, 760 155" stroke="#DA446E" stroke-width="2" fill="none" opacity="0.7"/>
          <path id="path-agent-2" d="M 568 240 C 640 240, 700 240, 760 245" stroke="#BC25A9" stroke-width="2" fill="none" opacity="0.7"/>
          <path id="path-agent-3" d="M 568 255 C 640 285, 700 320, 760 335" stroke="#861FCB" stroke-width="2" fill="none" opacity="0.7"/>
          <path id="path-agent-4" d="M 568 270 C 640 320, 700 400, 760 425" stroke="#521CE4" stroke-width="2" fill="none" opacity="0.7"/>

          <!-- Agent-bokser -->
          <g class="ovc-node">
            <rect x="760" y="30" width="220" height="70" rx="18" fill="rgba(248,98,51,0.12)" stroke="#F86233"/>
            <text x="870" y="60" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="16">Vgs opplæring</text>
            <text x="870" y="82" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">eier: Vgs-avdelingen</text>
          </g>
          <g class="ovc-node">
            <rect x="760" y="120" width="220" height="70" rx="18" fill="rgba(218,68,110,0.12)" stroke="#DA446E"/>
            <text x="870" y="150" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="16">Tannhelse</text>
            <text x="870" y="172" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">eier: Tannhelse-avdelingen</text>
          </g>
          <g class="ovc-node">
            <rect x="760" y="210" width="220" height="70" rx="18" fill="rgba(188,37,169,0.12)" stroke="#BC25A9"/>
            <text x="870" y="240" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="16">Samferdsel</text>
            <text x="870" y="262" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">eier: Samferdsel-avdelingen</text>
          </g>
          <g class="ovc-node">
            <rect x="760" y="300" width="220" height="70" rx="18" fill="rgba(134,31,203,0.12)" stroke="#861FCB"/>
            <text x="870" y="330" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="16">Tilskudd</text>
            <text x="870" y="352" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">eier: Tilskudd-avdelingen</text>
          </g>
          <g class="ovc-node">
            <rect x="760" y="390" width="220" height="70" rx="18" fill="rgba(82,28,228,0.12)" stroke="#521CE4"/>
            <text x="870" y="420" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="16">Reis Nordland</text>
            <text x="870" y="442" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">kollektiv · samme plattform</text>
          </g>

          <!-- Animert melding-prikk -->
          <circle id="msg-dot" cx="75" cy="240" r="7" fill="#F86233" filter="url(#msg-glow)" opacity="0"/>
        </svg>
      </div>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
  onMount(root) {
    const cleanups: Array<() => void> = [];

    // Innfade nodene
    const nodes = root.querySelectorAll<SVGGElement>('.ovc-node');
    nodes.forEach((n, i) => {
      n.style.opacity = '0';
      n.style.transform = 'translateY(8px)';
      n.style.transition = 'opacity 380ms ease, transform 380ms cubic-bezier(0.2,0.8,0.2,1)';
      const id = window.setTimeout(() => {
        n.style.opacity = '1';
        n.style.transform = 'none';
      }, 240 + i * 140);
      cleanups.push(() => clearTimeout(id));
    });

    // Melding-animasjon: innbygger → grensesnitt → orkestrator → tilfeldig agent, loop
    const dot = root.querySelector<SVGCircleElement>('#msg-dot');
    const pathInG = root.querySelector<SVGPathElement>('#path-innbygger-grensesnitt');
    const pathGO = root.querySelector<SVGPathElement>('#path-grensesnitt-orkestrator');
    const agentPaths = [0, 1, 2, 3, 4].map((i) =>
      root.querySelector<SVGPathElement>(`#path-agent-${i}`)
    );
    if (dot && pathInG && pathGO && agentPaths.every(Boolean)) {
      const stop = loop(
        [
          async (s) => {
            // Plasser ved innbygger og fade in
            dot.setAttribute('cx', '75');
            dot.setAttribute('cy', '240');
            dot.setAttribute('fill', '#FFFFFF');
            dot.style.opacity = '1';
            await wait(260, s);
            // Reise til grensesnitt
            await animateAlongPath(dot, pathInG, 380, s);
            await wait(180, s);
            // Reise til orkestrator
            await animateAlongPath(dot, pathGO, 560, s);
            await wait(280, s);
            // Velg en agent og reise dit (farg dot etter agent)
            const i = Math.floor(Math.random() * 5);
            dot.setAttribute('fill', AGENT_COLORS[i]);
            await animateAlongPath(dot, agentPaths[i] as SVGPathElement, 950, s);
            // Fade ut ved agent
            dot.style.transition = 'opacity 300ms ease';
            dot.style.opacity = '0';
            await wait(700, s);
            dot.style.transition = '';
          },
        ],
        { initialDelay: 1500 }
      );
      cleanups.push(stop);
    }

    return () => cleanups.forEach((fn) => fn());
  },
};

export default slide;
