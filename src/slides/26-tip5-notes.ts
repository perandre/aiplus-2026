import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'tip5-notes',
  title: 'Fagavdelingen vedlikeholder',
  render: () =>
    mediaSlide({
      eyebrow: 'Tips 5 · Eierskap',
      src: '/media/knowledge-notes.png',
      alt: 'Notater',
      caption: 'Tannhelse eier tannhelse. Samferdsel eier samferdsel.',
    }),
};

export default slide;
