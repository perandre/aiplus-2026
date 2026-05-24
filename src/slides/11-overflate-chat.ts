import { mediaSlide, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'overflate-chat',
  title: 'Overflate: Chat',
  render: () =>
    mediaSlide({
      eyebrow: 'Overflate 1 · Chat',
      src: '/media/bot-conversation.gif',
      alt: 'Reis Nordland chat',
      caption: 'Reis Nordland — chat på reisnordland.no',
    }),
};

export default slide;
