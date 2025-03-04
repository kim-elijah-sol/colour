import { padding, styleToken } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: styleToken.full,
});

export const pickerContainer = style({
  width: styleToken.full,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  ...padding({ x: 16 }),
});

export const picker = style({
  position: 'relative',
  width: styleToken.full,
  height: 268,
  borderRadius: 8,
  '::before': {
    content: '',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))',
    borderRadius: 8,
  },
});

export const pickerController = style({
  position: 'absolute',
  transform: 'translate(-50%, 50%)',
  width: 16,
  height: 16,
  background: '#FFFFFF',
  boxShadow: '0 0 8px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '50%',
  cursor: 'pointer',
  transitionProperty: 'width, height, box-shadow',
  transitionDuration: '0.21s',
  ':hover': {
    boxShadow: '0 0 16px 8px rgba(0, 0, 0, 0.12)',
    width: 20,
    height: 20,
  },
  ':active': {
    boxShadow: '0 0 12px 6px rgba(0, 0, 0, 0.15)',
    width: 18,
    height: 18,
    opacity: 0.9,
  },
});

export const slider = style({
  position: 'relative',
  width: styleToken.full,
  height: 20,
  background: `linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)`,
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

export const inputBox = style({
  position: 'relative',
  '::after': {
    content: '#',
    position: 'absolute',
    fontSize: 16,
    fontWeight: 600,
    color: '#333',
    left: 16,
    top: '50%',
    transform: `translateY(-50%)`,
  },
});

export const input = style({
  width: styleToken.full,
  height: 46,
  lineHeight: '46px',
  fontSize: 16,
  fontWeight: 600,
  ...padding({ left: 26, right: 16 }),
  color: '#333',
  border: '1px solid #E0E0E0',
  borderRadius: 8,
  transition: '0.21s',
  ':focus': {
    borderColor: '#000000',
  },
});

export const previewColorBox = style({
  position: 'absolute',
  right: 8,
  top: '50%',
  transform: `translateY(-50%)`,
  width: 30,
  height: 30,
  borderRadius: 4,
});
