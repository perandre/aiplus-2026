export interface Slide {
  id: string;
  title: string;
  render: () => string;
  onMount?: (root: HTMLElement) => void | (() => void);
}

interface MediaFrameOpts {
  src: string;
  type?: 'image' | 'video' | 'iframe';
  alt?: string;
  style?: string;
}

export function mediaFrame(opts: MediaFrameOpts): string {
  const type = opts.type ?? (opts.src.match(/\.(mp4|webm|mov)$/i) ? 'video' : 'image');
  const style = opts.style ? ` style="${opts.style}"` : '';

  let inner = '';
  if (type === 'video') {
    inner = `<video src="${opts.src}" autoplay muted loop playsinline></video>`;
  } else if (type === 'iframe') {
    inner = `<iframe src="${opts.src}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox" title="${opts.alt ?? ''}"></iframe>`;
  } else {
    inner = `<img src="${opts.src}" alt="${opts.alt ?? ''}" />`;
  }

  return `<div class="media-frame"${style}><div class="media-frame-inner">${inner}</div></div>`;
}

interface MediaSlideOpts {
  eyebrow: string;
  src: string;
  type?: 'image' | 'video' | 'iframe';
  alt?: string;
  caption?: string;
}

/** Full slide rendering for a media-only layout: eyebrow on top, big screenshot in middle, caption + logo at bottom. */
export function mediaSlide(opts: MediaSlideOpts): string {
  return `
    <section class="slide media-only">
      <div class="media-eyebrow">${opts.eyebrow}</div>
      <div class="media-wrap">${mediaFrame({ src: opts.src, type: opts.type, alt: opts.alt })}</div>
      <div class="media-bottom">
        <p class="media-caption">${opts.caption ?? ''}</p>
        <img class="slide-logo" src="/logos/logo-frontkom-on-dark.svg" alt="Frontkom" />
      </div>
    </section>
  `;
}

export function slideShell(
  body: string,
  opts: { muted?: boolean; cover?: boolean; logo?: boolean; watermark?: boolean } = {}
): string {
  const cls = [
    'slide',
    opts.muted ? 'is-muted' : '',
    opts.cover ? 'is-cover' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const logoSrc = opts.muted ? '/logos/logo-frontkom.svg' : '/logos/logo-frontkom-on-dark.svg';
  const logo = opts.logo !== false
    ? `<div class="slide-logo"><img src="${logoSrc}" alt="Frontkom" /></div>`
    : '';

  const watermark = opts.watermark
    ? `<img class="slide-watermark" src="/logos/logo-frontkom-symbol-outlined.svg" alt="" />`
    : '';

  return `<section class="${cls}">${watermark}${body}${logo}</section>`;
}
