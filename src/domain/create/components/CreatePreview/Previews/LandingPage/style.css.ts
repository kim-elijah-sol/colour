import { vars } from '@/styles/theme.css';
import { padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: vars.full,
  height: vars.full,
  ...padding(16),
});
