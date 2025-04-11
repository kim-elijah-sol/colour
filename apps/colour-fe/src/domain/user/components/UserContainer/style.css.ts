import { vars } from '@/styles/theme.css';
import { flex, margin, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const userContainer = style([
  flex({ direction: 'column' }),
  {
    height: vars.full,
    width: vars.full,
    ...padding(32),
    maxWidth: 1260,
    ...margin({ x: vars.auto }),
  },
]);
