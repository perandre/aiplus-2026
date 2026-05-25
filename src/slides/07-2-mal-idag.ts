import { slideShell, type Slide } from '../lib/slide';

const slide: Slide = {
  id: '2-mal-idag',
  title: '2 mål i dag',
  render: () =>
    slideShell(
      `
      <div class="eyebrow">2 mål i dag</div>
      <h2 class="h1">I dag vil jeg dele:</h2>
      <ol class="agenda" style="margin-top:var(--s-2xl);">
        <li>
          <span class="agenda-num">1</span>
          <span>Case-erfaringer om hvordan lage en chatbot som <strong style="color:var(--on-dark);">funker</strong>.</span>
        </li>
        <li>
          <span class="agenda-num">2</span>
          <span>Caser for å bruke chatbot-prosjektet til å løse <strong style="color:var(--on-dark);">flere ting enn chat</strong>.</span>
        </li>
      </ol>
      `
    ),
};

export default slide;
