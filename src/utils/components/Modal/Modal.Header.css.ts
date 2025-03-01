import { padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: 50,
  position: 'relative',
  ...padding({ x: 8 }),
});

export const title = style({
  fontSize: 20,
  fontWeight: 600,
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  whiteSpace: 'nowrap',
});
