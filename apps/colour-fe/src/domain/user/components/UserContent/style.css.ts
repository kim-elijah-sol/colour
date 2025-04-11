import { padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  overflowY: 'auto',
  ...padding(32),
  flex: 1,
});
