import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'hook-reis-video',
  title: 'Reis Nordland',
  render: () =>
    mediaSlide({
      src: 'https://youtu.be/Pp68f7jlabw',
      alt: 'Reis Nordland presentasjonsvideo',
      bleed: true,
      logo: false,
    }),
};

export default slide;
