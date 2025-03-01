import { style } from '@vanilla-extract/css';

import { margin, padding, styleToken } from '@/utils/styles';

export const mainStyle = style({
  ...padding({
    top: 64,
  }),
  maxWidth: 1200,
  ...margin({
    x: styleToken.auto,
  }),
});
