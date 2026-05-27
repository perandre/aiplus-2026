import type { Slide } from '../lib/slide';

// DEL 1 — INTRO
import cover from './01-cover';
import omMeg from './02-om-meg';
import omFrontkom from './03-om-frontkom';
import chatbotsGlimrende from './04-chatbots-glimrende';
import inspirasjon from './05-inspirasjon';
import toMalIdag from './06-2-mal-idag';

// DEL 2 — REIS NORDLAND + SUKSESSFAKTORER
import reisIntro from './07-reis-nordland-intro';
import video from './08-video';
import finalist from './09-finalist';
import suksessfaktorer from './10-suksessfaktorer';
import teknologiskFleksibilitet from './11-teknologisk-fleksibilitet';
import reiseplanlegger from './12-reiseplanlegger';
import datadrevetInnsikt from './13-datadrevet-innsikt';
import personvernForst from './14-personvern-forst';
import monitorering from './15-monitorering';
import vedlikehold from './16-vedlikehold';
import kildegrensesnitt from './17-kildegrensesnitt';

// DEL 3 — TENK STØRRE
import tenkStorre from './18-tenk-storre';
import nfk5Agenter from './19-nfk-5-agenter';
import chapterKiLag from './20-chapter-ki-lag';
import illustrasjon5 from './21-illustrasjon-5-agenter';
import kiLagForBrukerreisen from './22-ki-lag-for-brukerreisen';
import grensesnittAiSok from './23-overflate-ai-sok';
import grensesnittStudierad from './24-overflate-studieguide';
import grensesnittFeedback from './25-overflate-feedback';
import andreGrensesnitt from './26-andre-grensesnitt';

// DEL 4 — AVSLUTNING
import takeAways from './27-take-aways';
import takkQa from './28-takk-qa';

export const slides: Slide[] = [
  cover,
  omMeg,
  omFrontkom,
  chatbotsGlimrende,
  inspirasjon,
  toMalIdag,
  reisIntro,
  video,
  finalist,
  suksessfaktorer,
  teknologiskFleksibilitet,
  reiseplanlegger,
  datadrevetInnsikt,
  personvernForst,
  monitorering,
  vedlikehold,
  kildegrensesnitt,
  tenkStorre,
  nfk5Agenter,
  chapterKiLag,
  illustrasjon5,
  kiLagForBrukerreisen,
  grensesnittAiSok,
  grensesnittStudierad,
  grensesnittFeedback,
  andreGrensesnitt,
  takeAways,
  takkQa,
];

/**
 * Per-slide auto-advance durations (seconds). Used when 'f' starts the session timer.
 */
const SLIDE_DURATIONS: Record<string, number> = {
  cover: 12,
  'om-meg': 15,
  'om-frontkom': 20,
  'chatbots-glimrende': 15,
  inspirasjon: 12,
  '2-mal-idag': 18,
  'reis-nordland-intro': 20,
  'hook-reis-video': 110,
  finalist: 15,
  suksessfaktorer: 25,
  'teknologisk-fleksibilitet': 25,
  reiseplanlegger: 50,
  'datadrevet-innsikt': 50,
  'personvern-forst': 60,
  monitorering: 45,
  vedlikehold: 45,
  kildegrensesnitt: 40,
  'tenk-storre': 15,
  'nfk-5-agenter': 25,
  'chapter-ki-lag': 12,
  'illustrasjon-5-agenter': 40,
  'ki-lag-for-brukerreisen': 50,
  'grensesnitt-ai-sok': 40,
  'grensesnitt-studierad': 40,
  'grensesnitt-feedback': 40,
  'andre-grensesnitt': 30,
  'take-aways': 30,
  qa: 60,
};

for (const slide of slides) {
  slide.durationSec = SLIDE_DURATIONS[slide.id] ?? 30;
}
