import { vars } from '@/styles/theme.css';
import { flex, padding } from '@/utils/styles';
import { keyframes, style } from '@vanilla-extract/css';

export const slideInKeyframes = keyframes({
  from: {
    transform: 'translateX(-120%)',
  },
  to: {
    transform: 'translateX(0)',
  },
});

export const aside = style([
  flex({ direction: 'column' }),
  {
    width: vars.size.domain.create.asideWidth,
    height: vars.full,
    background: vars.colour.white,
    ...padding(24),
    gap: 16,
    overflowY: 'auto',
    animation: `${slideInKeyframes} 0.42s forwards`,
    borderRight: '1px solid #F3F3F3',
  },
]);

export const tabSelect = style({
  transform: 'translateX(-120%)',
  animation: `${slideInKeyframes} 0.42s forwards`,
  animationDelay: '0.63s',
});

export const detail = style({
  transform: 'translateX(-120%)',
  animation: `${slideInKeyframes} 0.42s forwards`,
  animationDelay: '0.84s',
});
