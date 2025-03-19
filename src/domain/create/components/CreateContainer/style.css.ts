import { padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const createContaier = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  ...padding({ top: 40 }),
});
