import { CMYK, RGB } from "@colour/types";

export function cmykToRgb([c, m, y, k]: CMYK): RGB {
  const C = c / 100;
  const M = m / 100;
  const Y = y / 100;
  const K = k / 100;

  const r = Math.round(255 * (1 - C) * (1 - K));
  const g = Math.round(255 * (1 - M) * (1 - K));
  const b = Math.round(255 * (1 - Y) * (1 - K));

  return [r, g, b];
}
