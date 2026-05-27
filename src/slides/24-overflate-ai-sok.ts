import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'grensesnitt-ai-sok',
  title: 'Grensesnitt: AI-søk',
  render: () =>
    mediaSlide({
      eyebrow: 'Grensesnitt · AI-søk',
      src: '/media/nmbu-search.gif',
      alt: 'NMBU AI-søk i bruk',
      caption: 'AI-oversikt for søk (med samme kunnskapsdatabase som chatbot).',
    }),
};

export default slide;
