import { vars } from '@/styles/theme.css';
import { margin, styleToken } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const contentWrapper = style({
  width: `calc(${styleToken.full} - ${vars.size.asideWidth})`,
  height: vars.full,
  ...margin({ left: styleToken.auto }),
});
