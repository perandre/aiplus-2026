import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'many-channels',
  title: 'Det er ikke bare chat',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Vent …</div>
      <h1 class="statement-text">Det er <span class="gradient-text">ikke bare chat</span>.</h1>
      <div class="channel-list">
        <span>🔍 Søk</span>
        <span>📞 Telefon</span>
        <span>📝 Skjema</span>
        <span>📄 Nettside</span>
        <span>⚡ Automatisering</span>
        <span>👤 Intern</span>
      </div>
      <p class="statement-sub" style="margin-top:var(--s-xl);">
        Skal vi bygge nytt KI for hver kanal — eller dele kunnskapen?
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
