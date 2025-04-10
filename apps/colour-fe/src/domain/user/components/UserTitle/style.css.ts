import { margin } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const userTitle = style({
  fontSize: 42,
  fontWeight: 800,
  ...margin({ bottom: 16, x: 8 }),
  fontFamily: 'IBM Plex Sans',
});
