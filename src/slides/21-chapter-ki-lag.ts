import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'chapter-ki-lag',
  title: 'Ett KI-lag for hele brukerreisen',
  render: () => `
    <section class="slide chapter-divider">
      <div class="chapter-bar chapter-bar-top"></div>
      <h1 class="chapter-text">Ett <span class="gradient-text">KI-lag</span><br/>for hele brukerreisen.</h1>
      <div class="chapter-bar chapter-bar-bottom"></div>
    </section>
  `,
};

export default slide;
