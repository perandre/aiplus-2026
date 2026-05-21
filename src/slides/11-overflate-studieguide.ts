import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'overflate-studieguide',
  title: 'Overflate: Studieguide',
  render: () =>
    mediaSlide({
      eyebrow: 'Overflate 3 · Interaktiv guide',
      src: '/media/ai-study-guide.png',
      alt: 'ONH studieguide',
      caption: 'Oslo Nye Høyskole — interaktiv studierådgiver.',
    }),
};

export default slide;
