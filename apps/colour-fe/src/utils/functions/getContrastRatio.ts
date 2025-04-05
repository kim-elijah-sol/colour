import { hexToRgb } from '@colour/fx';
import { getLuminance } from './getLuminance';

export function getContrastRatio(hex1: string, hex2: string) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);

  const luminance1 = getLuminance(rgb1);
  const luminance2 = getLuminance(rgb2);

  const brighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);

  const contrastRatio = (brighter + 0.05) / (darker + 0.05); // WCAG 대비 비율 공식

  return contrastRatio;
}
