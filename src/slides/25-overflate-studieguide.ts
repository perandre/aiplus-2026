import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'overflate-studieguide',
  title: 'Overflate: Studieguide',
  render: () =>
    mediaSlide({
      eyebrow: 'Overflate 3 · Interaktiv guide',
      src: '/media/studievelger.gif',
      alt: 'ONH studievelger i bruk',
      caption: 'Oslo Nye Høyskole — interaktiv studierådgiver.',
    }),
};

export default slide;
