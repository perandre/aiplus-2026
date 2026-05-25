import { slideShell, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'take-aways',
  title: 'Take-aways',
  render: () =>
    slideShell(
      `
      <div class="eyebrow">Ta med dette hjem</div>
      <h2 class="h1">Tre ting å huske:</h2>
      <ol class="agenda" style="margin-top:var(--s-2xl);">
        <li>
          <span class="agenda-num">1</span>
          <span>La <strong style="color:var(--on-dark);">fagavdelingen eie</strong> chatboten — ikke IT.</span>
        </li>
        <li>
          <span class="agenda-num">2</span>
          <span>Behandle <strong style="color:var(--on-dark);">kunnskapsgrunnlaget som infrastruktur</strong> — ikke et chatbot-vedlegg.</span>
        </li>
        <li>
          <span class="agenda-num">3</span>
          <span>Planlegg for <strong style="color:var(--on-dark);">flere overflater</strong> fra dag én.</span>
        </li>
      </ol>
      `
    ),
};

export default slide;
