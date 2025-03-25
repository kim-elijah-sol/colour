import { flex, margin } from '@/utils/styles';
import { style } from '@vanilla-extract/css';
import { slideInKeyframes } from '../style.css';

export const container = style([
  flex(),
  {
    ...margin({ bottom: 16 }),
    transform: 'translateX(-120%)',
    animation: `${slideInKeyframes} 0.42s forwards`,
    animationDelay: '0.21s',
  },
]);
