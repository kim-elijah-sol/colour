import { RGB } from '@/types';

export function getHue([_r, _g, _b]: RGB) {
  const r = _r / 255;
  const g = _g / 255;
  const b = _b / 255;

  const Cmax = Math.max(r, g, b);
  const Cmin = Math.min(r, g, b);

  const s = Cmax - Cmin;

  const h = s
    ? Cmax === r
      ? (g - b) / s
      : Cmax === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;

  return Math.round(60 * h < 0 ? 60 * h + 360 : 60 * h);
}
