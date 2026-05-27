import { loop, typeText, wait } from '../lib/animate';
import { mediaFrame, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'personvern-eksempel',
  title: 'Personvern — i praksis',
  render: () => `
    <section class="slide media-only">
      <div class="media-eyebrow">Suksessfaktor 3 · i praksis</div>
      <div class="sanitize-demo" aria-hidden="true">
        <div class="sanitize-label">Live:</div>
        <div class="sanitize-bubble">
          <span class="sanitize-prefix">"Mitt kontonummer er </span><span class="sanitize-target">_</span><span class="sanitize-suffix">"</span>
        </div>
        <div class="sanitize-arrow">→</div>
        <div class="sanitize-bubble sanitize-bubble-out">
          <span class="sanitize-prefix">"Mitt kontonummer er </span><span class="sanitize-out">…</span><span class="sanitize-suffix">"</span>
        </div>
      </div>
      <div class="media-wrap">
        ${mediaFrame({ src: '/media/privacy-sanitization.png', alt: 'Persondata anonymisert før LLM' })}
      </div>
      <div class="media-bottom">
        <p class="media-caption">Stopper persondata FØR de når LLM.</p>
        <img class="slide-logo" src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" />
      </div>
    </section>
  `,
  onMount(root) {
    const target = root.querySelector<HTMLElement>('.sanitize-target');
    const out = root.querySelector<HTMLElement>('.sanitize-out');
    const outBubble = root.querySelector<HTMLElement>('.sanitize-bubble-out');
    const arrow = root.querySelector<HTMLElement>('.sanitize-arrow');
    if (!target || !out || !outBubble || !arrow) return;

    return loop(
      [
        async (s) => {
          target.textContent = '';
          out.textContent = '';
          outBubble.classList.remove('is-visible');
          arrow.classList.remove('is-visible');
          await wait(400, s);
          await typeText(target, '1234.56.78901', 70, s);
          await wait(700, s);
          arrow.classList.add('is-visible');
          await wait(200, s);
          outBubble.classList.add('is-visible');
          out.textContent = '[PRIVATE_NUMBER_SANITIZED]';
          await wait(3200, s);
        },
      ],
      { initialDelay: 600 }
    );
  },
};

export default slide;
