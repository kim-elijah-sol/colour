import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const _profile = style({
  width: 40,
  height: 40,
  borderRadius: vars.half,
  cursor: 'pointer',
  transition: '0.21s',
  ':hover': {
    boxShadow: '0 0 8px 3px rgba(100,100,100,0.2)',
    width: 44,
    height: 44,
    transform: 'translateX(2px)',
  },
});

export const profile = styleVariants({
  default: [_profile],
  forLight: [
    _profile,
    {
      border: '1px solid #CCCCCC',
    },
  ],
});
