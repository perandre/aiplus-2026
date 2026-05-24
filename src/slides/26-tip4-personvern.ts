import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'tip4-personvern-media',
  title: 'Persondata anonymisert',
  render: () =>
    mediaSlide({
      eyebrow: 'Tips 4 · I praksis',
      src: '/media/privacy-sanitization.png',
      alt: 'Persondata anonymisert',
      caption: '[PRIVATE_NUMBER_SANITIZED] — før LLM, etter logging.',
    }),
};

export default slide;
