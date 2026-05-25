import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'overflate-feedback',
  title: 'Overflate: Feedback',
  render: () =>
    mediaSlide({
      eyebrow: 'Overflate 4 · Feedback',
      src: '/media/ai-feedback-widget.gif',
      alt: 'Fant du det du lette etter?',
      caption: '"Fant du det du lette etter?" — gull i kunnskapsgapene.',
    }),
};

export default slide;
