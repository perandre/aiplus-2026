import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'kildegrensesnitt',
  title: 'Eksempel: Kildegrensesnitt',
  render: () =>
    mediaSlide({
      eyebrow: 'Og bak kulissene',
      src: '/media/knowledge-sources.png',
      alt: 'Kildegrensesnitt',
      caption: 'Kildegrensesnitt som er enkle å bruke, integrert med API-er.',
    }),
};

export default slide;
