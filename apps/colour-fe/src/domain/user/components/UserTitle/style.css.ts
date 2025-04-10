import { margin } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const userTitle = style({
  fontSize: 36,
  fontWeight: 800,
  ...margin({ bottom: 16, x: 8 }),
});
