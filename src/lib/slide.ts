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

function youtubeEmbedUrl(src: string): string | null {
  // Match youtu.be/<id> or youtube.com/watch?v=<id>
  const m =
    src.match(/youtu\.be\/([\w-]{6,})/i) ||
    src.match(/youtube\.com\/watch\?v=([\w-]{6,})/i) ||
    src.match(/youtube\.com\/embed\/([\w-]{6,})/i);
  if (!m) return null;
  const id = m[1];
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: id,
    controls: '1',
    modestbranding: '1',
    rel: '0',
    playsinline: '1',
  });
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

export function mediaFrame(opts: MediaFrameOpts): string {
  let src = opts.src;
  let type = opts.type;

  // Auto-detect YouTube — even if user passed type: 'video', a YouTube URL
  // needs to be embedded as an iframe.
  const ytEmbed = youtubeEmbedUrl(src);
  if (ytEmbed) {
    src = ytEmbed;
    type = 'iframe';
  } else if (!type) {
    type = src.match(/\.(mp4|webm|mov)$/i) ? 'video' : 'image';
  }

  const style = opts.style ? ` style="${opts.style}"` : '';
  const isIframe = type === 'iframe';
  const cls = isIframe ? 'media-frame media-frame--iframe' : 'media-frame';

  let inner = '';
  if (type === 'video') {
    inner = `<video src="${src}" autoplay muted loop playsinline></video>`;
  } else if (type === 'iframe') {
    inner = `<iframe src="${src}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="${opts.alt ?? ''}"></iframe>`;
  } else {
    inner = `<img src="${src}" alt="${opts.alt ?? ''}" />`;
  }

  return `<div class="${cls}"${style}><div class="media-frame-inner">${inner}</div></div>`;
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
