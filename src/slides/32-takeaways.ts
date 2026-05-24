import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'takeaways',
  title: 'Take aways',
  render: () => `
    <section class="slide">
      <div class="eyebrow">Ta med dette hjem</div>
      <h2 class="h1">7 tips for et <span class="gradient-text">KI-lag som funker</span>.</h2>
      <ol style="font-size:clamp(20px,3cqh,32px);line-height:1.6;color:var(--on-dark);padding-left:1.2em;margin-top:var(--s-xl);">
        <li>Bygg et brukervennlig dashbord.</li>
        <li>Orkestrer flere spesialiserte agenter.</li>
        <li>Bredt, men kuratert kunnskapsgrunnlag.</li>
        <li>Fjern persondata før LLM-en ser dem.</li>
        <li>Eierskap der kunnskapen er.</li>
        <li>Bygg på rammeverk som vokser.</li>
        <li>Definer hva suksess betyr.</li>
      </ol>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
};

export default slide;
