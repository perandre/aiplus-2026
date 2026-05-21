import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'trap-everyone',
  title: 'De fleste vil bygge en chatbot.',
  render: () =>
    `<section class="slide statement">
      <div class="eyebrow">Den vanlige fellen</div>
      <h1 class="statement-text">De fleste vil bygge <span class="gradient-text">en chatbot</span>.</h1>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>`,
};

export default slide;
