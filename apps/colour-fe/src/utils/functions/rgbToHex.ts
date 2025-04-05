import { RGB } from '@/types';

function decToHex(value: number) {
  return value.toString(16).toUpperCase().padStart(2, '0');
}

export function rgbToHex([r, g, b]: RGB): string {
  return `${decToHex(r)}${decToHex(g)}${decToHex(b)}`;
}
