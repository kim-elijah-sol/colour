import { margin } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const userAccountTitle = style({
  fontSize: 32,
  fontWeight: 800,
  ...margin({ bottom: 16 }),
});
