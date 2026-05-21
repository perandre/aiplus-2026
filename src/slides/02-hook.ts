import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'hook-reis-video',
  title: 'Reis Nordland — første overflate',
  render: () =>
    mediaSlide({
      eyebrow: 'Reis Nordland · i drift',
      src: '/media/reise-nordland-presentasjon.compressed.mp4',
      type: 'video',
      alt: 'Reis Nordland presentasjonsvideo',
      caption: 'Vi har bygd det. Nå skal vi skalere det.',
    }),
};

export default slide;
