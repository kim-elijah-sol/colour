import { vars } from '@/styles/theme.css';
import { padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const pickerContainer = style({
  width: vars.full,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const picker = style({
  position: 'relative',
  width: vars.full,
  height: 200,
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
  width: vars.full,
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
    borderColor: vars.color.brand,
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
