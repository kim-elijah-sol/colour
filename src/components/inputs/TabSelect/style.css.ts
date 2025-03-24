import { vars } from '@/styles/theme.css';
import { flex, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const tabSelect = style([
  flex(),
  {
    position: 'relative',
    background: vars.color.background,
    borderRadius: 22,
  },
]);

export const option = style({
  transition: '0.21s',
  background: 'transparent',
  cursor: 'pointer',
  flex: 1,
  fontSize: 16,
  fontWeight: 600,
  height: 44,
  position: 'relative',
  zIndex: 2,
});

export const indicator = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  pointerEvents: 'none',
  ...padding(4),
  transition: '0.21s',
  '::after': {
    content: '',
    background: vars.color.white,
    display: 'block',
    width: vars.full,
    height: vars.full,
    borderRadius: 18,
    boxShadow: '0 0 16px 4px rgba(50,50,50,0.05)',
  },
});
