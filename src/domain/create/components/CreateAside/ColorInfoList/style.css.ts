import { vars } from '@/styles/theme.css';
import { flex } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const container = style([
  flex({
    direction: 'column',
  }),
  {
    listStyle: 'none',
    gap: 4,
    transform: 'translateX(-8px)',
    width: `calc(${vars.full} + 16px)`,
  },
]);
