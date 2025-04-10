import { vars } from '@/styles/theme.css';
import { flex, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const userAccountContainer = style([
  flex({ direction: 'column' }),
  {
    height: vars.full,
    width: vars.full,
    ...padding(20),
  },
]);
