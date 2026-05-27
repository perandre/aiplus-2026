import { animateNumber } from '../lib/animate';
import { mediaFrame, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'datadrevet-innsikt',
  title: 'Datadrevet innsiktsprosess',
  render: () => `
    <section class="slide media-only">
      <div class="media-eyebrow">Suksessfaktor 2</div>
      <div class="media-wrap">
        ${mediaFrame({ src: '/media/dashboard-analytics.png', alt: 'Innsikt fra produksjon' })}
      </div>
      <div class="media-bottom">
        <p class="media-caption">
          Datadrevet innsiktsprosess —
          <span class="num-counter" data-target="11966">0</span> samtaler,
          <span class="num-counter" data-target="84888">0</span> meldinger.
        </p>
        <img class="slide-logo" src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" />
      </div>
    </section>
  `,
  onMount(root) {
    const cleanups: Array<() => void> = [];
    root.querySelectorAll<HTMLElement>('.num-counter').forEach((el) => {
      const target = Number(el.dataset.target ?? '0');
      cleanups.push(animateNumber(el, 0, target, 2200));
    });
    return () => cleanups.forEach((fn) => fn());
  },
};

export default slide;
