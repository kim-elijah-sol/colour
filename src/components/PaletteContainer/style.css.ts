import { vars } from '@/styles/theme.css';
import { margin, padding, styleToken } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const paletteContainerStyle = style({
  width: `calc(${styleToken.full} - ${vars.size.asideWidth})`,
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 24,
  ...padding(32),
  ...margin({ left: styleToken.auto }),
  '@media': {
    'screen and (max-width: 1000px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    'screen and (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (max-width: 480px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
      ...padding({ x: 16, y: 32 }),
    },
  },
});
