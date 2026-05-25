import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'overflate-ai-sok',
  title: 'Overflate: AI-søk',
  render: () =>
    mediaSlide({
      eyebrow: 'Overflate 2 · AI-søk',
      src: '/media/nmbu-search.gif',
      alt: 'NMBU AI-søk i bruk',
      caption: 'NMBU — søk som svarer.',
    }),
};

export default slide;
