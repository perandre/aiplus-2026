import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'grensesnitt-feedback',
  title: 'Grensesnitt: Feedback',
  render: () =>
    mediaSlide({
      eyebrow: 'Grensesnitt · Feedback',
      src: '/media/ai-feedback-widget.gif',
      alt: 'Fant du det du lette etter?',
      caption: '"Fant du det du lette etter?" — med hjelpsom oppfølging basert på kunnskapsdatabasen fra chatbot.',
    }),
};

export default slide;
