import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'tip2-instructions',
  title: 'Tydelige workflows',
  render: () =>
    mediaSlide({
      eyebrow: 'Tips 2 · Tydelige workflows',
      src: '/media/agent-instructions.png',
      alt: 'Agent instructions',
      caption: 'Hver intensjon har en konkret workflow.',
    }),
};

export default slide;
