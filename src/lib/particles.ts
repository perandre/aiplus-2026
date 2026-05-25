/**
 * Build a particle layer HTML — floating dots that drift upward.
 * Tasteful, not noisy. Used on cover and finale slides.
 */
export function particleLayer(count = 24): string {
  const cols = ['c1', 'c2', 'c3', 'c4', 'c5'];
  const parts: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.round(Math.random() * 100);
    const size = 3 + Math.random() * 6;
    const dur = 14 + Math.random() * 14;
    const delay = -Math.random() * dur;
    const drift = Math.round((Math.random() - 0.5) * 80);
    const opacity = 0.35 + Math.random() * 0.5;
    const col = cols[i % cols.length];
    parts.push(
      `<span class="particle ${col}" style="left:${x}%;width:${size}px;height:${size}px;animation-duration:${dur}s;animation-delay:${delay}s;--drift:${drift}px;--peak-opacity:${opacity};"></span>`
    );
  }
  return `<div class="particles" aria-hidden="true">${parts.join('')}</div>`;
}
