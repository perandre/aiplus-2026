import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'monitorering',
  title: 'Godt system for monitorering',
  render: () =>
    mediaSlide({
      eyebrow: 'Suksessfaktor 4',
      src: '/media/dashboard-workspace.png',
      alt: 'Dashbord for monitorering',
      caption: 'Godt system for monitorering — for de som faktisk eier boten.',
    }),
};

export default slide;
