import { styleToken } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const slider = style({
  position: 'relative',
  width: styleToken.full,
  height: 20,
  borderRadius: 8,
});

export const sliderController = style({
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: 24,
  height: 24,
  boxShadow: '0 0 8px 4px rgba(0, 0, 0, 0.1)',
  background: '#FFFFFF',
  borderRadius: '50%',
  cursor: 'pointer',
  transitionProperty: 'width, height, box-shadow',
  transitionDuration: '0.21s',
  ':hover': {
    boxShadow: '0 0 16px 8px rgba(0, 0, 0, 0.12)',
    width: 32,
    height: 32,
  },
  ':active': {
    boxShadow: '0 0 12px 6px rgba(0, 0, 0, 0.15)',
    width: 28,
    height: 28,
    opacity: 0.9,
  },
});
