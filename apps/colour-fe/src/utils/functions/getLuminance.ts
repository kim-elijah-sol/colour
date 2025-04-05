import { RGB } from '@colour/types';

export function getLuminance([r, g, b]: RGB) {
  const a = [r, g, b].map(function (x) {
    x = x / 255; // RGB 값은 0-255 범위이므로, 255로 나누어 0-1 범위로 변환
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722; // WCAG에서 정의한 가중치
}
