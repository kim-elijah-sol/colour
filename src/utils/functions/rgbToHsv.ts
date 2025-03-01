import { RGB } from '@/types';

export function rgbToHsv([r, g, b]: RGB) {
  const rabs = r / 255;
  const gabs = g / 255;
  const babs = b / 255;
  const v = Math.max(rabs, gabs, babs);
  const diff = v - Math.min(rabs, gabs, babs);
  const diffc = (c: number) => (v - c) / 6 / diff + 1 / 2;

  let h = 0,
    s = 0;
  if (diff == 0) {
    h = s = 0;
  } else {
    s = diff / v;
    const rr = diffc(rabs);
    const gg = diffc(gabs);
    const bb = diffc(babs);

    if (rabs === v) {
      h = bb - gg;
    } else if (gabs === v) {
      h = 1 / 3 + rr - bb;
    } else if (babs === v) {
      h = 2 / 3 + gg - rr;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(v * 100)];
}
