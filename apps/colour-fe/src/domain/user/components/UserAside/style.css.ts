import { vars } from '@/styles/theme.css';
import { clickableStyle, flex, padding } from '@/utils/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const container = style([
  flex({ direction: 'column' }),
  {
    ...padding({ x: 20, y: 60 }),
    width: 240,
    borderRight: '1px solid #F3F3F3',
    gap: 8,
  },
]);

const _anchor = style([
  clickableStyle.dark,
  {
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    fontSize: 18,
    ...padding({ x: 16, y: 10 }),
    borderRadius: 8,
    fontWeight: 600,
  },
]);

export const anchor = styleVariants({
  is: [
    _anchor,
    {
      color: vars.color.brand,
      backgroundColor: `rgba(0,106,255,0.1)`,
      ':hover': {
        backgroundColor: `rgba(0,106,255,0.2)`,
      },
      ':active': {
        backgroundColor: `rgba(0,106,255,0.3)`,
      },
    },
  ],
  not: [_anchor],
});
