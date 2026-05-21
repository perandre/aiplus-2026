import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'tip1-analytics',
  title: 'Analytics',
  render: () =>
    mediaSlide({
      eyebrow: 'Tips 1 · Innsikt',
      src: '/media/dashboard-analytics.png',
      alt: 'Analytics',
      caption: '11 966 samtaler. 84 888 meldinger.',
    }),
};

export default slide;
