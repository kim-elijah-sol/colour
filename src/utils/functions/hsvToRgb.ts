import { RGB } from '@/types';

type HSV = [number, number, number];

export function hsvToRgb([h, s, v]: HSV): RGB {
  h = parseFloat(h.toString());
  s = parseFloat(s.toString());
  v = parseFloat(v.toString());
  if (h < 0) h = 0;
  if (s < 0) s = 0;
  if (v < 0) v = 0;
  if (h >= 360) h = 359;
  if (s > 100) s = 100;
  if (v > 100) v = 100;
  s /= 100.0;
  v /= 100.0;
  const C = v * s;
  const hh = h / 60.0;
  const X = C * (1.0 - Math.abs((hh % 2) - 1.0));
  let r = 0,
    g = 0,
    b = 0;
  if (hh >= 0 && hh < 1) {
    r = C;
    g = X;
  } else if (hh >= 1 && hh < 2) {
    r = X;
    g = C;
  } else if (hh >= 2 && hh < 3) {
    g = C;
    b = X;
  } else if (hh >= 3 && hh < 4) {
    g = X;
    b = C;
  } else if (hh >= 4 && hh < 5) {
    r = X;
    b = C;
  } else {
    r = C;
    b = X;
  }
  const m = v - C;
  r += m;
  g += m;
  b += m;
  r *= 255.0;
  g *= 255.0;
  b *= 255.0;
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);

  return [r, g, b];
}
