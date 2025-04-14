import { vars } from '@/styles/theme.css';
import { fixed, flex } from '@/utils/styles';
import { keyframes, style } from '@vanilla-extract/css';

const backgroundKeyframes = keyframes({
  from: {
    background: 'transparent',
  },
  to: {
    background: 'rgba(0,0,0,0.4)',
  },
});

export const background = style([
  flex({ align: 'center', justify: 'center' }),
  {
    ...fixed(0),
    animation: `${backgroundKeyframes} 0.2s forwards`,
    zIndex: 99,
  },
]);

const foregroundKeyframes = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(16px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

export const foreground = style({
  background: vars.colour.white,
  borderRadius: 16,
  boxShadow: '0 0 24px 8px rgba(70,70,70,0.05)',
  overflow: 'hidden',
  animation: `${foregroundKeyframes} 0.21s forwards`,
});
