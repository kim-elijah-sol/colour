import { vars } from '@/styles/theme.css';
import { padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const contrastItem = style({
  width: vars.full,
  height: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  ...padding({ x: 24 }),
});

export const contrastItemText = style({
  fontSize: 16,
  fontWeight: 600,
});

export const contrastItemRight = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});
