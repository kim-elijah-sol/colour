import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';
import { fixed, flex, padding } from '@/utils/styles';

export const header = style([
  flex({
    align: 'center',
    justify: 'between',
  }),
  {
    height: vars.size.headerHeight,
    background: vars.color.white,
    ...fixed({
      x: 0,
      top: 0,
    }),
    ...padding({
      x: 32,
    }),
    zIndex: 99,
    '::after': {
      content: '',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 1,
      background: 'linear-gradient(to right, #F3F3F3, #E0E0E0, #F3F3F3)',
    },
  },
]);

export const logoO = style({
  color: vars.color.red,
});

export const logoU = style({
  color: vars.color.green,
  transform: 'translateY(1px)',
});
export const logoR = style({
  color: vars.color.brand,
});

export const link = style({
  textDecoration: 'none',
});
