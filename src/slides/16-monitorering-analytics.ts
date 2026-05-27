import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'monitorering-analytics',
  title: 'Monitorering — innsikt',
  render: () =>
    mediaSlide({
      eyebrow: 'Suksessfaktor 4',
      src: '/media/dashboard-analytics.png',
      alt: 'Analytics — innsikt fra produksjon',
      caption: 'Følg trender, topp-tema og responstid kontinuerlig.',
    }),
};

export default slide;
