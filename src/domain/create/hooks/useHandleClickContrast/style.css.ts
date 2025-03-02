import { padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const contrastList = style({
  maxHeight: 400,
  overflowY: 'auto',
});

export const contrastItem = style({
  width: 504,
  height: 80,
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
