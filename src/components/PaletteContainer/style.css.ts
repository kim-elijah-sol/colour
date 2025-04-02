import { padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const paletteContainerStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 24,
  ...padding(24),
  '@media': {
    'screen and (max-width: 1540px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    'screen and (max-width: 1240px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (max-width: 792px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
});
