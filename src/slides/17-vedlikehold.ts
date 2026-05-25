import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'vedlikehold',
  title: 'Enkelt vedlikehold av kunnskapsdatabasen',
  render: () =>
    mediaSlide({
      eyebrow: 'Suksessfaktor 5',
      src: '/media/knowledge-notes.png',
      alt: 'Vedlikehold av kunnskapsdatabasen',
      caption: 'Enkelt vedlikehold av kunnskapsdatabasen — fagavdelingen eier sin.',
    }),
};

export default slide;
