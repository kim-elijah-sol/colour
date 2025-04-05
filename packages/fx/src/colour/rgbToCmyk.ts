import { CMYK, RGB } from "@colour/types";

export function rgbToCmyk([r, g, b]: RGB): CMYK {
  var c = 1 - r / 255;
  var m = 1 - g / 255;
  var y = 1 - b / 255;
  var k = Math.min(c, Math.min(m, y));

  c = ((c - k) / (1 - k)) * 100;
  m = ((m - k) / (1 - k)) * 100;
  y = ((y - k) / (1 - k)) * 100;
  k = k * 100;

  c = isNaN(c) ? 0 : Math.round(c);
  m = isNaN(m) ? 0 : Math.round(m);
  y = isNaN(y) ? 0 : Math.round(y);
  k = isNaN(k) ? 0 : Math.round(k);

  return [c, m, y, k];
}
