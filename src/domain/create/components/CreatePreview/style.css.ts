import { vars } from '@/styles/theme.css';
import { flex, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const container = style([
  flex({ direction: 'column' }),
  {
    flex: 1,
    ...padding(20),
    gap: 16,
  },
]);

export const top = style({
  maxWidth: 280,
  width: vars.full,
});

export const page = style({
  background: vars.color.white,
  borderRadius: 16,
  flex: 1,
  boxShadow: '0 0 16px 6px rgba(50,50,50,0.05)',
});

export const tabSelect = style({
  background: vars.color.white,
});

export const tabSelectIndicator = style({
  ':after': {
    background: '#e8ecef',
    boxShadow: 'none',
  },
});
