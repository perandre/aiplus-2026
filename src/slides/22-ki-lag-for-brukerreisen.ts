import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'ki-lag-for-brukerreisen',
  title: 'Et KI-lag for hele brukerreisen',
  render: () => `
    <section class="slide">
      <div class="eyebrow">Et KI-lag for hele brukerreisen</div>
      <h2 class="h1">Ett <span class="gradient-text">kunnskapsgrunnlag</span>. Mange overflater.</h2>
      <div class="diagram" id="ki-lag-svg">
        <svg viewBox="0 0 1200 620" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="KI-lag med 7 overflater og 4 chat-sub-agenter">
          <defs>
            <linearGradient id="kil-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#F86233"/>
              <stop offset="50%" stop-color="#BC25A9"/>
              <stop offset="100%" stop-color="#521CE4"/>
            </linearGradient>
            <filter id="kil-soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>

          <!-- Forbindelser fra core til overflater (under nodene) -->
          <g class="ki-edges" stroke-width="1.6" fill="none" opacity="0.4">
            <path id="kil-edge-0" d="M 600 170 L 600 80" stroke="#DA446E"/>
            <path id="kil-edge-1" d="M 685 200 L 950 100" stroke="#BC25A9"/>
            <path id="kil-edge-2" d="M 705 270 L 1015 270" stroke="#A123BC"/>
            <path id="kil-edge-3" d="M 685 340 L 950 450" stroke="#861FCB"/>
            <path id="kil-edge-4" d="M 600 370 L 600 430" stroke="#F86233" stroke-width="2.2" opacity="0.6"/>
            <path id="kil-edge-5" d="M 515 340 L 230 450" stroke="#521CE4"/>
            <path id="kil-edge-6" d="M 495 270 L 195 270" stroke="#4F1BE5"/>
          </g>

          <!-- Flow particles — små prikker som beveger seg langs hver edge utover fra KI-laget -->
          <g class="ki-flow" aria-hidden="true">
            <circle r="3.5" fill="#DA446E" opacity="0.95">
              <animateMotion dur="2.4s" repeatCount="indefinite" begin="0s">
                <mpath href="#kil-edge-0"/>
              </animateMotion>
            </circle>
            <circle r="3.5" fill="#BC25A9" opacity="0.95">
              <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.34s">
                <mpath href="#kil-edge-1"/>
              </animateMotion>
            </circle>
            <circle r="3.5" fill="#A123BC" opacity="0.95">
              <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.68s">
                <mpath href="#kil-edge-2"/>
              </animateMotion>
            </circle>
            <circle r="3.5" fill="#861FCB" opacity="0.95">
              <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.02s">
                <mpath href="#kil-edge-3"/>
              </animateMotion>
            </circle>
            <circle r="4" fill="#F86233" opacity="1">
              <animateMotion dur="2.0s" repeatCount="indefinite" begin="1.36s">
                <mpath href="#kil-edge-4"/>
              </animateMotion>
            </circle>
            <circle r="3.5" fill="#521CE4" opacity="0.95">
              <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.7s">
                <mpath href="#kil-edge-5"/>
              </animateMotion>
            </circle>
            <circle r="3.5" fill="#4F1BE5" opacity="0.95">
              <animateMotion dur="2.4s" repeatCount="indefinite" begin="2.04s">
                <mpath href="#kil-edge-6"/>
              </animateMotion>
            </circle>
          </g>

          <!-- Sub-agent-linjer fra Chat -->
          <g class="ki-subedges" stroke-width="1.3" fill="none" opacity="0.5">
            <line x1="560" y1="490" x2="490" y2="555" stroke="#F86233"/>
            <line x1="580" y1="500" x2="565" y2="555" stroke="#DA446E"/>
            <line x1="620" y1="500" x2="645" y2="555" stroke="#861FCB"/>
            <line x1="640" y1="490" x2="720" y2="555" stroke="#521CE4"/>
          </g>

          <!-- Kjerne: kunnskapsgrunnlaget -->
          <g class="ki-core">
            <circle class="orch-pulse" cx="600" cy="270" r="130" fill="url(#kil-grad)" filter="url(#kil-soft)" opacity="0.4"/>
            <circle cx="600" cy="270" r="105" fill="#1A0054" stroke="url(#kil-grad)" stroke-width="3"/>
            <text x="600" y="258" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="26">KI-lag</text>
            <text x="600" y="285" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="15">kuraterte kilder</text>
            <text x="600" y="305" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="15">orkestrering · sanering</text>
          </g>

          <!-- 7 overflater rundt -->
          <g class="ki-surface" data-i="0">
            <rect x="495" y="20" width="210" height="64" rx="18" fill="rgba(218,68,110,0.15)" stroke="#DA446E"/>
            <text x="600" y="49" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="17">🔍 AI-søk</text>
            <text x="600" y="71" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">NMBU</text>
          </g>

          <g class="ki-surface" data-i="1">
            <rect x="840" y="50" width="220" height="64" rx="18" fill="rgba(188,37,169,0.15)" stroke="#BC25A9"/>
            <text x="950" y="79" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="17">🎓 Studieguide</text>
            <text x="950" y="101" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">Oslo Nye Høyskole</text>
          </g>

          <g class="ki-surface" data-i="2">
            <rect x="1015" y="240" width="170" height="64" rx="18" fill="rgba(161,35,188,0.15)" stroke="#A123BC"/>
            <text x="1100" y="269" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="17">👍 Feedback</text>
            <text x="1100" y="291" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="11">"Fant du svaret?"</text>
          </g>

          <g class="ki-surface" data-i="3">
            <rect x="830" y="418" width="245" height="64" rx="18" fill="rgba(134,31,203,0.15)" stroke="#861FCB"/>
            <text x="952" y="447" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="16">⚡ Automatiseringsflyt</text>
            <text x="952" y="469" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">saksbehandling</text>
          </g>

          <!-- Chat — større, med sub-agenter under -->
          <g class="ki-surface ki-surface-chat" data-i="4">
            <rect x="475" y="420" width="250" height="72" rx="20" fill="rgba(248,98,51,0.2)" stroke="#F86233" stroke-width="2"/>
            <text x="600" y="450" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="19">💬 Chat</text>
            <text x="600" y="476" text-anchor="middle" fill="#FCE7DD" font-family="Red Hat Text" font-size="13">4 fagagenter</text>
          </g>

          <!-- 4 Sub-agenter under Chat -->
          <g class="ki-subagent" data-i="0">
            <rect x="447" y="545" width="86" height="34" rx="14" fill="rgba(248,98,51,0.12)" stroke="#F86233" stroke-width="1.2"/>
            <text x="490" y="567" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="13">Vgs</text>
          </g>
          <g class="ki-subagent" data-i="1">
            <rect x="513" y="545" width="104" height="34" rx="14" fill="rgba(218,68,110,0.12)" stroke="#DA446E" stroke-width="1.2"/>
            <text x="565" y="567" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="13">Tannhelse</text>
          </g>
          <g class="ki-subagent" data-i="2">
            <rect x="595" y="545" width="100" height="34" rx="14" fill="rgba(134,31,203,0.12)" stroke="#861FCB" stroke-width="1.2"/>
            <text x="645" y="567" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="13">Samferdsel</text>
          </g>
          <g class="ki-subagent" data-i="3">
            <rect x="673" y="545" width="94" height="34" rx="14" fill="rgba(82,28,228,0.12)" stroke="#521CE4" stroke-width="1.2"/>
            <text x="720" y="567" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="13">Tilskudd</text>
          </g>

          <g class="ki-surface" data-i="5">
            <rect x="130" y="418" width="200" height="64" rx="18" fill="rgba(82,28,228,0.15)" stroke="#521CE4"/>
            <text x="230" y="447" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="17">🎙️ Voice</text>
            <text x="230" y="469" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">framtidig</text>
          </g>

          <g class="ki-surface" data-i="6">
            <rect x="15" y="240" width="180" height="64" rx="18" fill="rgba(79,27,229,0.15)" stroke="#4F1BE5"/>
            <text x="105" y="269" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="17">👤 Intern</text>
            <text x="105" y="291" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">saksbehandler</text>
          </g>
        </svg>
      </div>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
  onMount(root) {
    const surfaces = root.querySelectorAll<SVGGElement>('.ki-surface');
    const sub = root.querySelectorAll<SVGGElement>('.ki-subagent');
    surfaces.forEach((s, i) => {
      s.style.opacity = '0';
      s.style.transform = 'scale(0.92)';
      s.style.transformOrigin = 'center';
      s.style.transition = 'opacity 400ms ease, transform 400ms cubic-bezier(0.2,0.8,0.2,1)';
      setTimeout(() => {
        s.style.opacity = '1';
        s.style.transform = 'scale(1)';
      }, 320 + i * 160);
    });
    sub.forEach((s, i) => {
      s.style.opacity = '0';
      s.style.transform = 'translateY(-6px)';
      s.style.transition = 'opacity 320ms ease, transform 320ms cubic-bezier(0.2,0.8,0.2,1)';
      setTimeout(() => {
        s.style.opacity = '1';
        s.style.transform = 'none';
      }, 1500 + i * 100);
    });
  },
};

export default slide;
