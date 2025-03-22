import { style } from '@vanilla-extract/css';

import { margin } from '@/utils/styles';

export const mainStyle = style({
  position: 'relative',
  ...margin({
    top: 64,
  }),
});
