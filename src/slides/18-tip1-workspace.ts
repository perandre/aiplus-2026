import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'tip1-workspace',
  title: 'Workspace',
  render: () =>
    mediaSlide({
      eyebrow: 'Tips 1 · Dashbord',
      src: '/media/dashboard-workspace.png',
      alt: 'Workspace',
      caption: 'Daglig overblikk — for de som faktisk eier boten.',
    }),
};

export default slide;
