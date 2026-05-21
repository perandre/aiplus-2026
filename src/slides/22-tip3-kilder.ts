import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'tip3-kilder',
  title: 'Kuraterte kilder',
  render: () =>
    mediaSlide({
      eyebrow: 'Tips 3 · Kildene',
      src: '/media/knowledge-sources.png',
      alt: 'Kilder',
      caption: 'Du velger hva som er kilder — og hva som ikke er det.',
    }),
};

export default slide;
