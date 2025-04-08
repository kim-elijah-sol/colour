import { clickableStyle, flex } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const closeButton = style([
  clickableStyle.dark,
  flex({ align: 'center', justify: 'center' }),
  {
    width: 32,
    height: 32,
    borderRadius: 12,
  },
]);

export const xIcon = style({
  transition: '0.21s',
  selectors: {
    [`${closeButton}:hover &`]: {
      transform: 'rotate(90deg)',
    },
  },
});
