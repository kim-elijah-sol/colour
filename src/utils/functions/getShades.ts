import { hexToRgb } from './hexToRgb';
import { rgbToHex } from './rgbToHex';

const STEP_COUNT = 6;

function getWhiteStep(value: number) {
  return (255 - value) / STEP_COUNT;
}

function getBlackStep(value: number) {
  return value / STEP_COUNT;
}

function getWhiteValueByStep(baseValue: number, step: number, index: number) {
  return Math.round(baseValue + step * index);
}
function getBlackValueByStep(baseValue: number, step: number, index: number) {
  return Math.round(baseValue - step * index);
}

export function getShades(hex: string): string[] {
  const [r, g, b] = hexToRgb(hex);

  const whiteRedStep = getWhiteStep(r);
  const whiteGreenStep = getWhiteStep(g);
  const whiteBlueStep = getWhiteStep(b);

  const blackRedStep = getBlackStep(r);
  const blackGreenStep = getBlackStep(g);
  const blackBlueStep = getBlackStep(b);

  const whiteColors: string[] = [];
  const blackColors: string[] = [];

  for (let i = 1; i < STEP_COUNT; i++) {
    whiteColors.push(
      rgbToHex([
        getWhiteValueByStep(r, whiteRedStep, i),
        getWhiteValueByStep(g, whiteGreenStep, i),
        getWhiteValueByStep(b, whiteBlueStep, i),
      ])
    );
    blackColors.push(
      rgbToHex([
        getBlackValueByStep(r, blackRedStep, i),
        getBlackValueByStep(g, blackGreenStep, i),
        getBlackValueByStep(b, blackBlueStep, i),
      ])
    );
  }

  blackColors.reverse();

  return blackColors.concat(hex).concat(whiteColors);
}
