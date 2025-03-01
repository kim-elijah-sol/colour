import { style } from '@vanilla-extract/css';

import { fixed, margin, padding, styleToken } from '@/utils/styles';

export const headerStyle = style({
  height: 64,
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
    background: 'linear-gradient(to right, transparent, #e1e1e1, transparent)',
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
