import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const brandButtonCSS = style({
  color: vars.color.white,
  backgroundColor: vars.color.brand,
  cursor: 'pointer',
  transition: '0.21s',
  ':hover': {
    backgroundColor: `#005BDB`,
  },
  ':active': {
    backgroundColor: `#004FBE`,
  },
});
