import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'tindre',
  title: 'Tindre.ai',
  render: () => `
    <section class="slide tindre-fullbleed">
      <img src="/media/tindre.png" alt="Tindre.ai" />
    </section>
  `,
};

export default slide;
