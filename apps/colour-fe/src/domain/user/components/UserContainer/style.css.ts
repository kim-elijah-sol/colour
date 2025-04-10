import { vars } from '@/styles/theme.css';
import { flex, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const userContainer = style([
  flex({ direction: 'column' }),
  {
    height: vars.full,
    width: vars.full,
    ...padding(20),
  },
]);
