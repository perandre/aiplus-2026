import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'reiseplanlegger',
  title: 'Eksempel: Reiseplanlegger i samtalen',
  render: () =>
    mediaSlide({
      eyebrow: 'Eksempel · Suksessfaktor 1',
      src: '/media/reiseplanlegger.gif',
      alt: 'Reiseplanlegger med API-integrasjon i chat',
      caption: 'API-integrasjon + skreddersydd UI direkte i samtalen.',
    }),
};

export default slide;
