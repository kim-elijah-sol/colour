import { vars } from '@/styles/theme.css';
import { padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const button = style({
  backgroundColor: vars.color.brand,
  color: vars.color.white,
  fontWeight: 600,
  fontSize: 14,
  ...padding({ x: 16 }),
  height: 36,
  borderRadius: 12,
  cursor: 'pointer',
  transition: '0.21s',
  ':hover': {
    backgroundColor: `rgba(0,106,255,0.6)`,
  },
  ':active': {
    backgroundColor: `#005BDB`,
  },
});
