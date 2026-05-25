import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'personvern-forst',
  title: 'Personvern først',
  render: () =>
    mediaSlide({
      eyebrow: 'Suksessfaktor 3 · Personvern først',
      src: '/media/privacy-sanitization.png',
      alt: 'Persondata anonymisert før LLM',
      caption: 'LLM-er med DPA. Stopper persondata FØR de når LLM.',
    }),
};

export default slide;
