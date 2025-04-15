import { vars } from '@/styles/theme.css';
import { flex } from '@/utils/styles';
import { style, styleVariants } from '@vanilla-extract/css';

const _profile = style([
  flex({ align: 'center', justify: 'center' }),
  {
    width: 40,
    height: 40,
    borderRadius: vars.half,
    cursor: 'pointer',
    transition: '0.21s',
  },
]);

export const profile = styleVariants({
  default: [_profile],
  forLight: [
    _profile,
    {
      border: '1px solid #CCCCCC',
    },
  ],
});

export const nickname = style({
  fontSize: 20,
  fontWeight: 700,
});
