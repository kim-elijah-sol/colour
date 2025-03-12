import { clickableStyle, fixed, padding } from '@/utils/styles';
import { keyframes, style } from '@vanilla-extract/css';

export const dim = style({
  ...fixed(0),
});

const container = style({
  position: 'fixed',
  background: '#fff',
  borderRadius: 12,
  boxShadow: '0 0 24px 8px rgba(70,70,70,0.3)',
});

const toRightKeyframes = keyframes({
  from: {
    transform: `translateX(8px)`,
    opacity: 0,
  },
  to: {
    transform: `translateX(24px)`,
    opacity: 1,
  },
});

export const toRightContainer = style([
  container,
  {
    animation: `${toRightKeyframes} 0.21s forwards`,
  },
]);

const toLeftKeyframes = keyframes({
  from: {
    transform: `translate(-8px, -50%)`,
    opacity: 0,
  },
  to: {
    transform: `translate(-24px, -50%)`,
    opacity: 1,
  },
});

export const toLeftContainer = style([
  container,
  {
    animation: `${toLeftKeyframes} 0.21s forwards`,
  },
]);

export const bottom = style({
  ...padding(8),
  background: '#FFFFFF',
  width: 300,
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '0 0 12px 12px',
});

export const applyButton = style([
  clickableStyle.dark,
  {
    width: 32,
    height: 32,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
]);
