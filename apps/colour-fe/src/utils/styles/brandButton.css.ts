import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const brandButtonCSS = style({
  color: vars.colour.white,
  backgroundColor: vars.colour.brand,
  cursor: 'pointer',
  transition: '0.21s',
  ':hover': {
    backgroundColor: `#005BDB`,
  },
  ':active': {
    backgroundColor: `#004FBE`,
  },
  ':disabled': {
    cursor: 'not-allowed',
    background: '#AAAAAA',
  },
});
