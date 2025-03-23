import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';
import { margin } from '@/utils/styles';

export const mainStyle = style({
  position: 'relative',
  height: `calc(100vh - ${vars.size.headerHeight})`,
  ...margin({
    top: vars.size.headerHeight,
  }),
});
