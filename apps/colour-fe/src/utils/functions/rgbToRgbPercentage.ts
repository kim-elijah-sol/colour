import { RGB } from '@/types';

export function rgbToRgbPercentage([r, g, b]: RGB): RGB {
  return [(r / 255) * 100, (g / 255) * 100, (b / 255) * 100];
}
