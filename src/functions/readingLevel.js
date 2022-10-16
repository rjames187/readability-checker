import { LEVEL_THRESHOLDS } from "../data";

function getReadingLevel (num) {
    let curLevel = 0;
    while (LEVEL_THRESHOLDS[curLevel].thresh >= 10) {
      if (num >= LEVEL_THRESHOLDS[curLevel].thresh) {
        break;      
      }
      curLevel += 1;
    }
    return LEVEL_THRESHOLDS[curLevel].desc;
}

function updateColor (num) {
    let r = 0;
    let g = 0;
    let b = 0;
    if (!num) { g = 128 }
    if (num && num >= 65) {
        b = Math.min((num - 65) * 10.2, 255);
        g = (Math.abs(num - 100) * 3.657);
    } else if (num) {
        g = Math.min((num - 10) * 2.327, 128);
        r = Math.min(Math.abs(65 - num) * 4.63, 255)
    }
    const root = document.querySelector(':root');
    root.style.setProperty('--color', `rgb(${r}, ${g}, ${b})`);
}

export { getReadingLevel, updateColor };