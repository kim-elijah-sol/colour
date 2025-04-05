import { pipe } from 'fp-ts/function';
import { hexToRgb } from './hexToRgb';
import { hslToRgb } from './hslToRgb';
import { rgbToHex } from './rgbToHex';
import { rgbToHsl } from './rgbToHsl';

export function getShades(hex: string): string[] {
  const shades: string[] = [];

  const [h, s, l] = pipe(hex, hexToRgb, rgbToHsl);

  const currentHexBrightLevel = Math.floor(l / 10);

  const brightRemain = l % 10;

  for (let i = 9; i >= 0; i--) {
    if (currentHexBrightLevel === i) {
      shades.push(hex);
    } else {
      shades.push(pipe([h, s, i * 10 + brightRemain], hslToRgb, rgbToHex));
    }
  }

  return shades;
}
