import type { Slide } from '../lib/slide';

const slide: Slide = {
  id: 'datadrevet-innsikt',
  title: 'Datadrevet innsiktsprosess',
  render: () => `
    <section class="slide">
      <div class="eyebrow">Suksessfaktor 2</div>
      <h2 class="h1">Datadrevet <span class="gradient-text">innsiktsprosess</span>.</h2>
      <div class="split" style="flex:1;min-height:0;">
        <div class="split-content">
          <ul class="suksess-list">
            <li><span class="suksess-dot suksess-1"></span>Samle data om hva brukerne trenger hjelp med</li>
            <li><span class="suksess-dot suksess-2"></span>Intervjue målgrupper om toppoppgaver</li>
            <li><span class="suksess-dot suksess-3"></span>Tenk i brukerhistorier</li>
            <li><span class="suksess-dot suksess-4"></span>Workshops!</li>
          </ul>
        </div>
        <div class="split-content" style="align-items:center;">
          <div class="media-frame" style="width:100%;height:auto;">
            <div class="media-frame-inner">
              <img src="/media/workshop.png" alt="Workshop med brukerinnsikt" />
            </div>
          </div>
        </div>
      </div>
      <div class="slide-logo"><img src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" /></div>
    </section>
  `,
  onMount(root) {
    const items = root.querySelectorAll<HTMLLIElement>('.suksess-list li');
    const timeouts: number[] = [];
    items.forEach((li, i) => {
      const id = window.setTimeout(() => li.classList.add('in'), 320 + i * 220);
      timeouts.push(id);
    });
    return () => timeouts.forEach((id) => clearTimeout(id));
  },
};

export default slide;
