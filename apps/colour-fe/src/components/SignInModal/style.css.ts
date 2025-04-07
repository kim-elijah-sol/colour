import { vars } from '@/styles/theme.css';
import { flex, margin, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: 360,
  ...padding(12),
  backgroundColor: vars.color.white,
});

const rollingWrapper = style({
  position: 'relative',
  overflow: 'hidden',
});

export const titleWrapper = style([
  rollingWrapper,
  {
    height: 38,
    ...margin({ bottom: 8 }),
  },
]);

export const rolling = style({
  transition: '0.21s',
});

export const title = style({
  fontSize: 28,
  fontWeight: 700,
  textAlign: 'center',
  lineHeight: '38px',
});

export const descriptionWrapper = style([
  rollingWrapper,
  {
    height: 24,
    ...margin({ bottom: 32 }),
  },
]);

export const description = style({
  fontSize: 16,
  textAlign: 'center',
  lineHeight: '24px',
  color: '#666666',
});

export const inputBox = style({
  minWidth: 336,
  transition: '0.21s',
});

export const input = style({
  minWidth: vars.full,
  height: 46,
  lineHeight: '46px',
  fontSize: 16,
  fontWeight: 600,
  ...padding({ x: 16 }),
  color: '#333',
  border: '1px solid #E0E0E0',
  borderRadius: 12,
  transition: '0.21s',
  ':focus': {
    borderColor: vars.color.brand,
  },
});

export const button = style({
  width: vars.full,
  height: 46,
  ...margin({ top: 24 }),
  borderRadius: 12,
  color: vars.color.white,
  backgroundColor: vars.color.brand,
  cursor: 'pointer',
  transition: '0.21s',
  ':hover': {
    backgroundColor: `rgba(0,106,255,0.6)`,
  },
  ':active': {
    backgroundColor: `#005BDB`,
  },
  fontSize: 16,
  fontWeight: 600,
});

export const inputWrapper = style({
  overflow: 'hidden',
});

export const inputRolling = style([
  flex(),
  {
    transition: '0.21s',
  },
]);
