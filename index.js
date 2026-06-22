// ===== SETUP ===== //

// End-user check JS works
console.info("This message should appear if the javascript integration has worked.");

import { Helpers, PageData } from './src/scripts/lib/helpers.js';
import { Navigator, Cruncher } from './src/scripts/lib/main.js';
import BoneMiner from './src/scripts/lib/game.js';

// Constants
const SECTION_COLOR_DICT = new Map([
    ["home", 300],
    ["example-1", 0],
    ["example-2", 0],
]);

const DEFAULT_CRUNCH_SIZE = 600;

const DEFAULT_SECTION = 'home';

// Main HTML functions

let data = new PageData(DEFAULT_CRUNCH_SIZE, DEFAULT_SECTION, SECTION_COLOR_DICT);

window.PageData = data;

window.Navigator = Navigator;
window.Crunch = Cruncher;
window.BoneMiner = BoneMiner;

// Activate events

window.onload = () => {
    Navigator.initPage();
};

document.addEventListener("oncrunch", () => {
    Cruncher.onCrunch();
    Cruncher.crunchRibbon();
    Cruncher.crunchContent();
});

document.addEventListener("onrelax", () => {
    Cruncher.onRelax();
    Cruncher.relaxRibbon();
    Cruncher.relaxContent();
});