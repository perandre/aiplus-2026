import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'datadrevet-innsikt',
  title: 'Datadrevet innsiktsprosess',
  render: () =>
    mediaSlide({
      eyebrow: 'Suksessfaktor 2',
      src: '/media/dashboard-analytics.png',
      alt: 'Innsikt fra produksjon',
      caption: 'Datadrevet innsiktsprosess: Kjør prosjektet som et webprosjekt.',
    }),
};

export default slide;
