import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'ki-lag-diagram',
  title: 'Ett kunnskapsgrunnlag. Mange overflater.',
  render: () => `
    <section class="slide">
      <div class="eyebrow">Hva er et KI-lag?</div>
      <h2 class="h1">Ett <span class="gradient-text">kunnskapsgrunnlag</span>. Mange overflater.</h2>
      <div class="diagram" id="ki-lag-svg">
        <svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="KI-lag med overflater">
          <defs>
            <linearGradient id="kil-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#F86233"/>
              <stop offset="50%" stop-color="#BC25A9"/>
              <stop offset="100%" stop-color="#521CE4"/>
            </linearGradient>
            <filter id="kil-soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>

          <!-- Kjerne: kunnskapsgrunnlaget -->
          <g class="ki-core">
            <circle cx="500" cy="240" r="120" fill="url(#kil-grad)" filter="url(#kil-soft)" opacity="0.4"/>
            <circle cx="500" cy="240" r="100" fill="#1A0054" stroke="url(#kil-grad)" stroke-width="3"/>
            <text x="500" y="230" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="22">KI-lag</text>
            <text x="500" y="258" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="14">kuraterte kilder</text>
            <text x="500" y="276" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="14">orkestrering · sanering</text>
          </g>

          <!-- 6 overflater rundt -->
          <g class="ki-surface" data-i="0">
            <line x1="430" y1="155" x2="280" y2="80" stroke="#F86233" stroke-width="1.5" opacity="0.5"/>
            <rect x="120" y="40" width="180" height="70" rx="18" fill="rgba(248,98,51,0.15)" stroke="#F86233"/>
            <text x="210" y="72" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="17">💬 Chat</text>
            <text x="210" y="93" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">Reis Nordland</text>
          </g>

          <g class="ki-surface" data-i="1">
            <line x1="600" y1="180" x2="760" y2="110" stroke="#DA446E" stroke-width="1.5" opacity="0.5"/>
            <rect x="700" y="70" width="180" height="70" rx="18" fill="rgba(218,68,110,0.15)" stroke="#DA446E"/>
            <text x="790" y="102" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="17">🔍 AI-søk</text>
            <text x="790" y="123" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">NMBU</text>
          </g>

          <g class="ki-surface" data-i="2">
            <line x1="615" y1="240" x2="780" y2="240" stroke="#BC25A9" stroke-width="1.5" opacity="0.5"/>
            <rect x="780" y="200" width="200" height="70" rx="18" fill="rgba(188,37,169,0.15)" stroke="#BC25A9"/>
            <text x="880" y="232" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="17">🎓 Studieguide</text>
            <text x="880" y="253" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">Oslo Nye Høyskole</text>
          </g>

          <g class="ki-surface" data-i="3">
            <line x1="600" y1="300" x2="760" y2="370" stroke="#861FCB" stroke-width="1.5" opacity="0.5"/>
            <rect x="720" y="340" width="200" height="70" rx="18" fill="rgba(134,31,203,0.15)" stroke="#861FCB"/>
            <text x="820" y="372" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="17">👍 Feedback</text>
            <text x="820" y="393" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">"Fant du svaret?"</text>
          </g>

          <g class="ki-surface" data-i="4">
            <line x1="430" y1="300" x2="280" y2="380" stroke="#521CE4" stroke-width="1.5" opacity="0.5"/>
            <rect x="140" y="350" width="180" height="70" rx="18" fill="rgba(82,28,228,0.15)" stroke="#521CE4"/>
            <text x="230" y="382" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="17">🎙️ Voice</text>
            <text x="230" y="403" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">framtidig</text>
          </g>

          <g class="ki-surface" data-i="5">
            <line x1="400" y1="220" x2="240" y2="220" stroke="#4F1BE5" stroke-width="1.5" opacity="0.5"/>
            <rect x="40" y="190" width="180" height="70" rx="18" fill="rgba(79,27,229,0.15)" stroke="#4F1BE5"/>
            <text x="130" y="222" text-anchor="middle" fill="#fff" font-family="Red Hat Text" font-weight="700" font-size="17">👤 Intern</text>
            <text x="130" y="243" text-anchor="middle" fill="#C8B5FF" font-family="Red Hat Text" font-size="12">saksbehandler</text>
          </g>
        </svg>
      </div>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
  onMount(root) {
    const surfaces = root.querySelectorAll<SVGGElement>('.ki-surface');
    surfaces.forEach((s, i) => {
      s.style.opacity = '0';
      s.style.transform = 'scale(0.92)';
      s.style.transformOrigin = 'center';
      s.style.transition = 'opacity 400ms ease, transform 400ms cubic-bezier(0.2,0.8,0.2,1)';
      setTimeout(() => {
        s.style.opacity = '1';
        s.style.transform = 'scale(1)';
      }, 360 + i * 180);
    });
  },
};

export default slide;
