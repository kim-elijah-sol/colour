import { style } from '@vanilla-extract/css';

const base = style({
  background: 'transparent',
  cursor: 'pointer',
  transition: '0.21s',
});

export const clickableStyle = {
  dark: style([
    base,
    {
      ':hover': {
        background: 'rgba(50,50,50,0.1)',
      },
      ':active': {
        transform: 'scale(0.97)',
        background: 'rgba(0,0,0,0.15)',
      },
    },
  ]),
  white: style([
    base,
    {
      ':hover': {
        background: 'rgba(255,255,255,0.15)',
      },
      ':active': {
        transform: 'scale(0.97)',
        background: 'rgba(255,255,255,.24)',
      },
    },
  ]),
};
