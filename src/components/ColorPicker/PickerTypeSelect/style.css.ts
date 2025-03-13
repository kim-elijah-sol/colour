import { clickableStyle, padding, styleToken } from '@/utils/styles';
import { keyframes, style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

export const button = style([
  clickableStyle.dark,
  {
    borderRadius: 12,
    ...padding({ x: 8, y: 8 }),
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
]);

export const text = style({
  fontSize: 14,
  fontWeight: 600,
  color: '#999',
});

export const selectText = style({
  color: '#000',
});

export const icon = style({
  transition: '0.21s',
  transform: 'translateY(1px)',
});

export const openedIcon = style({
  transform: 'translateY(1px) rotate(180deg)',
});

const optionsContainerKeyframes = keyframes({
  from: {
    bottom: styleToken.full,
    opacity: 0,
  },
  to: {
    bottom: 'calc(100% + 8px)',
    opacity: 1,
  },
});

export const optionsContainer = style({
  position: 'absolute',
  left: 0,
  ...padding(8),
  borderRadius: 12,
  background: '#FFFFFF',
  boxShadow: '0 0 24px 8px rgba(70,70,70,0.3)',
  animation: `${optionsContainerKeyframes} 0.21s forwards`,
});

export const option = style([
  text,
  clickableStyle.dark,
  {
    ...padding({ x: 12, y: 8 }),
    borderRadius: 8,
    width: 120,
    textAlign: 'left',
    transition: '0.21s',
    ':hover': {
      color: '#333',
    },
  },
]);
