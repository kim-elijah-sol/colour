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
    background: vars.color.white,
    boxShadow: '0 0 16px 8px rgba(50, 50, 50, 0.05)',
    ...padding(24),
    gap: 16,
    overflowY: 'auto',
    animation: `${slideInKeyframes} 0.42s forwards`,
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
