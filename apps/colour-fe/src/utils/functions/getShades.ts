import { hexToRgb, hslToRgb, rgbToHex, rgbToHsl } from '@colour/fx';
import { pipe } from 'fp-ts/function';

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
