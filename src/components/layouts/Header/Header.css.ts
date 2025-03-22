import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';
import { fixed, margin, padding, styleToken } from '@/utils/styles';

export const headerStyle = style({
  height: vars.size.headerHeight,
  background: '#FFFFFF',
  ...fixed({
    x: 0,
    top: 0,
  }),
  ...padding({
    x: 64,
  }),
  zIndex: 99,
  '::after': {
    content: '',
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    background: 'linear-gradient(to right, transparent, #E0E0E0, transparent)',
  },
});

export const headerInnerWrapperStyle = style({
  width: styleToken.full,
  height: styleToken.full,
  maxWidth: 1200,
  ...margin({
    x: styleToken.auto,
  }),
});
