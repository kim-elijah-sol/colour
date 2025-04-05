import { rgbToHex } from '@colour/fx';
import { random } from './random';

export function randomHex(minValue?: number): string;
export function randomHex(minValue: number = 0): string {
  const r = random(minValue, 255);
  const g = random(minValue, 255);
  const b = random(minValue, 255);

  return rgbToHex([r, g, b]);
}
