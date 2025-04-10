import { vars } from '@/styles/theme.css';
import { clickableStyle, flex, padding } from '@/utils/styles';
import { keyframes, style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

const _profile = style({
  width: 40,
  height: 40,
  borderRadius: vars.half,
  cursor: 'pointer',
  transition: '0.21s',
});

export const profile = styleVariants({
  default: [_profile],
  forLight: [
    _profile,
    {
      border: '1px solid #CCCCCC',
    },
  ],
});

const menuKeyframes = keyframes({
  from: {
    transform: 'translateY(-8px)',
    opacity: 0,
  },
  to: {
    transform: 'translateY(0px)',
    opacity: 1,
  },
});

export const menu = style([
  flex({
    direction: 'column',
  }),
  {
    position: 'absolute',
    right: 0,
    top: `calc(${vars.full} + 16px)`,
    ...padding(8),
    backgroundColor: vars.color.white,
    borderRadius: 12,
    zIndex: 3,
    boxShadow: '0 8px 24px 4px rgba(100,100,150,0.15)',
    animation: `${menuKeyframes} 0.21s forwards`,
    gap: 6,
  },
]);

const menuFadeOutKeyframes = keyframes({
  to: {
    transform: 'translateY(-8px)',
    opacity: 0,
  },
  from: {
    transform: 'translateY(0px)',
    opacity: 1,
  },
});

export const menuFadeOut = style({
  animation: `${menuFadeOutKeyframes} 0.21s forwards`,
});

export const anchor = style([
  clickableStyle.dark,
  flex({ align: 'center', justify: 'start' }),
  {
    gap: 6,
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    fontSize: 15,
    ...padding({ x: 12, y: 6 }),
    borderRadius: 8,
    fontWeight: 600,
  },
]);
