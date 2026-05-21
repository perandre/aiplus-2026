import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'hook-reis-video',
  title: 'Reis Nordland — første overflate',
  render: () =>
    mediaSlide({
      eyebrow: 'Reis Nordland · i drift',
      src: 'https://youtu.be/Pp68f7jlabw',
      alt: 'Reis Nordland presentasjonsvideo',
      caption: 'Vi har bygd det. Nå skal vi skalere det.',
    }),
};

export default slide;
