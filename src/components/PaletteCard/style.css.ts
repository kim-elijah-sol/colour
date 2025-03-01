import { margin, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const paletteCardListStyle = style({
  height: 64 * 4,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  borderRadius: 12,
});

export const paletteCardColorBlockStyle = style({
  flex: 1,
  transition: '0.2s',
  cursor: 'pointer',
  position: 'relative',
  ':hover': {
    flex: 1.25,
  },
});

export const colorCodeCopyButtonStyle = style({
  position: 'absolute',
  left: 0,
  bottom: 0,
  fontSize: 14,
  ...padding({
    x: 8,
    y: 4,
  }),
  color: '#FFFFFF',
  background: 'rgba(50,50,50,0.1)',
  borderTopRightRadius: 8,
  transition: '0.2s',
  opacity: 0,
  pointerEvents: 'none',
  selectors: {
    [`${paletteCardColorBlockStyle}:hover &`]: {
      opacity: 1,
      pointerEvents: 'all',
    },
  },
  ':active': {
    background: 'rgba(50,50,50,0.3)',
  },
});

export const paletteCardBottomStyle = style({
  ...margin({ top: 12 }),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const paletteCardLikeButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  background: '#fff',
  ...padding({ left: 10, right: 12, y: 6 }),
  border: '1px solid #eee',
  borderRadius: 12,
  cursor: 'pointer',
});

export const paletteCardLikeCountStyle = style({
  fontSize: 14,
  color: '#777',
  transform: 'translateY(-1px)',
});
