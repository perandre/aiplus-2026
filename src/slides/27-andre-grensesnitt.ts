import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'andre-grensesnitt',
  title: 'Og andre grensesnitt',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Og andre grensesnitt</div>
      <h1 class="statement-text">
        <span class="gradient-text">Voice</span>-bot på telefon.<br/>
        <span class="gradient-text">Intern</span>-bot for saksbehandlere++
      </h1>
      <p class="statement-sub">
        Alt fra samme kunnskapsdatabase.<br/>
        <em style="color:var(--brand);font-style:normal;">PS: Det funker i praksis!</em>
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
