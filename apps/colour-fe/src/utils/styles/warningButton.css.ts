import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const warningButtonCSS = style({
  color: vars.colour.white,
  backgroundColor: vars.colour.warning,
  cursor: 'pointer',
  transition: '0.21s',
  ':hover': {
    backgroundColor: `#DB0000`,
  },
  ':active': {
    backgroundColor: `#BF0000`,
  },
  ':disabled': {
    cursor: 'not-allowed',
    background: '#AAAAAA',
  },
});
