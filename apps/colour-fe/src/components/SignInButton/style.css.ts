import { brandButtonCSS, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const button = style([
  brandButtonCSS,
  {
    fontWeight: 600,
    fontSize: 14,
    ...padding({ x: 16 }),
    height: 36,
    borderRadius: 12,
  },
]);
