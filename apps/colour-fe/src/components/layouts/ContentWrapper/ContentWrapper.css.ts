import { vars } from '@/styles/theme.css';
import { margin } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const contentWrapper = style({
  width: `calc(${vars.full} - ${vars.size.asideWidth})`,
  height: vars.full,
  ...margin({ left: vars.auto }),
});
