import { keyframes, style } from '@vanilla-extract/css';

export const button = style({
  height: 48,
  width: 128,
  borderRadius: 12,
  fontSize: 16,
  color: '#FFFFFF',
  background: '#333333',
  cursor: 'pointer',
  transition: '0.21s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  ':hover': {
    background: '#666666',
  },
  ':active': {
    background: '#000000',
  },
});

const loaderKeyframes = keyframes({
  to: {
    transform: 'rotate(1turn)',
  },
});

export const loader = style({
  animation: `${loaderKeyframes} 1s infinite linear`,
});
