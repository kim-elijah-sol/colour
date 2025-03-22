import { vars } from '@/styles/theme.css';
import { margin, styleToken } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const contentWrapper = style({
  width: `calc(${styleToken.full} - ${vars.size.asideWidth})`,
  ...margin({ left: styleToken.auto }),
});
