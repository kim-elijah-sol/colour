import { vars } from '@/styles/theme.css';
import { clickableStyle, flex, padding } from '@/utils/styles';
import { keyframes, style } from '@vanilla-extract/css';

export const container = style([
  flex({ align: 'center' }),
  {
    gap: 16,
  },
]);

export const inputWrapper = style({
  position: 'relative',
  flex: 1,
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
  ...padding({ left: 26 }),
});

export const paletteButton = style([
  clickableStyle.dark,
  flex({ center: true }),
  {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 32,
    height: 32,
    borderRadius: 8,
  },
]);

const fadeInKeyframes = keyframes({
  from: {
    opacity: 0,
    transform: `translateY(8px)`,
  },
  to: {
    opacity: 1,
    transform: `translateY(0px)`,
  },
});

const fadeOutKeyframes = keyframes({
  to: {
    opacity: 0,
    transform: `translateY(8px)`,
  },
  from: {
    opacity: 1,
    transform: `translateY(0px)`,
  },
});

export const colourPickerContainer = style({
  position: 'absolute',
  right: 0,
  bottom: `calc(${vars.full} + 16px)`,
  background: vars.colour.white,
  ...padding(12),
  width: 300,
  borderRadius: 12,
  boxShadow: '0 0 12px 4px rgba(70,70,70,0.15)',
  animation: `${fadeInKeyframes} 0.21s forwards`,
});

export const colourPickerFadeOut = style({
  animation: `${fadeOutKeyframes} 0.21s forwards`,
});

export const okButton = style([
  clickableStyle.dark,
  flex({ center: true }),
  {
    width: 36,
    height: 36,
    borderRadius: 8,
  },
]);
