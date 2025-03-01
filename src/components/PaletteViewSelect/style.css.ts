import { padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const paletteViewSelectWrapperStyle = style({
  ...padding(8),
  borderRadius: 8,
  background: '#eee',
  width: 'max-content',
  display: 'flex',
  gap: 8,
});

export const paletteViewSelectStyle = style({
  ...padding(8),
  cursor: 'pointer',
  selectors: {
    '& > input:checked': {
      fontWeight: 600,
    },
  },
});
