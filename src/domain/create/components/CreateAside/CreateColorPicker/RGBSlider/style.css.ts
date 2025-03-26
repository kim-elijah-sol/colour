import { vars } from '@/styles/theme.css';
import { margin, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: vars.full,
});

export const pickerContainer = style({
  width: vars.full,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const top = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  ...margin({ bottom: 8 }),
});

export const label = style({
  fontSize: 14,
  fontWeight: 600,
});

export const input = style({
  width: 56,
  height: 28,
  lineHeight: '28px',
  fontSize: 14,
  fontWeight: 600,
  ...padding(12),
  color: '#333',
  border: '1px solid #E0E0E0',
  borderRadius: 8,
  transition: '0.21s',
  ':focus': {
    borderColor: '#000000',
  },
});
