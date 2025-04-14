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

export const top = flex({ align: 'center', justify: 'between' });

export const topLeft = style({
  width: 280,
});

export const page = style({
  background: vars.colour.white,
  borderRadius: 16,
  overflow: 'hidden',
  flex: 1,
  boxShadow: '0 0 8px 4px rgba(50, 50, 50, 0.03)',
});

export const tabSelect = style({
  background: vars.colour.white,
});

export const tabSelectIndicator = style({
  ':after': {
    background: '#e8ecef',
    boxShadow: 'none',
  },
});
