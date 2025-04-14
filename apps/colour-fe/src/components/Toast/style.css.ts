import { vars } from '@/styles/theme.css';
import { padding } from '@/utils/styles';
import { keyframes, style } from '@vanilla-extract/css';

const toastKeyframes = keyframes({
  '0%': {
    transform: 'translate(-50%, -200px)',
  },
  '30%': {
    transform: 'translate(-50%, 0)',
  },
  '70%': {
    transform: 'translate(-50%, 0)',
  },
  '100%': {
    transform: 'translate(-50%, -200px)',
  },
});

export const toast = style({
  position: 'fixed',
  top: 50,
  left: '50%',
  zIndex: 100,
  fontSize: 16,
  fontWeight: 600,
  ...padding({ x: 24, y: 16 }),
  background: '#3B425D',
  color: vars.colour.white,
  animation: `${toastKeyframes} 3s forwards`,
  borderRadius: 24,
  boxShadow: '0 0 8px 4px rgba(100,100,150,0.15)',
});
