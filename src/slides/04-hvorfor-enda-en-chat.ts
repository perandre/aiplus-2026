import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'hvorfor-enda-en-chat',
  title: 'Hvorfor ikke bare lage enda en chat?',
  render: () => `
    <section class="slide statement">
      <div class="eyebrow">Hvorfor ikke bare lage enda en chat?</div>
      <h1 class="statement-text">
        Vi leverer KI for <span class="gradient-text">mange formål</span>.<br/>
        Det som etterspørres er … chatbot?
      </h1>
      <p class="statement-sub">
        Fra digitale medarbeidere til automatisering — men spørsmålet vi får er nesten alltid det samme.
      </p>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
