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

export { getReadingLevel };