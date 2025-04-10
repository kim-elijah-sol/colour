import { padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  overflowY: 'auto',
  ...padding(20),
  flex: 1,
});
