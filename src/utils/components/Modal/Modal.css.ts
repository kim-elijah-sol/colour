import { fixed } from '@/utils/styles';
import { keyframes, style } from '@vanilla-extract/css';

const backgroundKeyframes = keyframes({
  from: {
    background: 'transparent',
  },
  to: {
    background: 'rgba(0,0,0,0.4)',
  },
});

export const background = style({
  ...fixed(0),
  animation: `${backgroundKeyframes} 0.2s forwards`,
  zIndex: 99,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const foreground = style({
  background: '#FFFFFF',
  borderRadius: 16,
  boxShadow: '0 0 24px 8px rgba(70,70,70,0.05)',
  overflow: 'hidden',
});
