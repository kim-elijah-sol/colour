import { vars } from '@/styles/theme.css';
import { flex } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const createContaier = style([
  flex(),
  {
    height: vars.full,
  },
]);
