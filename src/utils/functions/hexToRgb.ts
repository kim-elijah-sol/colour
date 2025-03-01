import { RGB } from '@/types';
import { hexToDec } from './hexToDec';

export function hexToRgb(hex: string): RGB {
  const hexRed = hex.substring(0, 2);
  const hexGreen = hex.substring(2, 4);
  const hexBlue = hex.substring(4, 6);

  return [hexToDec(hexRed), hexToDec(hexGreen), hexToDec(hexBlue)];
}
