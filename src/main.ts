import './style.css';
import { createNav } from './lib/nav';
import { slides } from './slides';

const stage = document.getElementById('stage');
if (!stage) throw new Error('Mangler #stage');

createNav(slides, stage);
