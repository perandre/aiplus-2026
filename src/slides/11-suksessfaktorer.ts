import { slideShell, type Slide } from '../lib/slide';

const slide: Slide = {
  id: 'suksessfaktorer',
  title: 'Suksessfaktorer',
  render: () =>
    slideShell(
      `
      <div class="eyebrow">Hva gjorde at det funket?</div>
      <h2 class="h1"><span class="gradient-text">Suksessfaktorer</span></h2>
      <ul class="suksess-list">
        <li><span class="suksess-dot suksess-1"></span>Teknologisk fleksibilitet</li>
        <li><span class="suksess-dot suksess-2"></span>Datadrevet innsiktsprosess</li>
        <li><span class="suksess-dot suksess-3"></span>Personvern først</li>
        <li><span class="suksess-dot suksess-4"></span>Godt system for monitorering</li>
        <li><span class="suksess-dot suksess-5"></span>Enkelt vedlikehold av kunnskapsdatabasen</li>
      </ul>
      `
    ),
};

export default slide;
