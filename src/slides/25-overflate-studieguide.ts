import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'grensesnitt-studierad',
  title: 'Grensesnitt: Studierådgiver',
  render: () =>
    mediaSlide({
      eyebrow: 'Grensesnitt · Studierådgiver',
      src: '/media/studievelger.gif',
      alt: 'ONH studievelger i bruk',
      caption: 'Studierådgiver (med samme kunnskapsdatabase som chatbot).',
    }),
};

export default slide;
