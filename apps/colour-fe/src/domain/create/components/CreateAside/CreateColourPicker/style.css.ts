import { style } from '@vanilla-extract/css';
import { slideInKeyframes } from '../style.css';

export const container = style({
  transform: 'translateX(-120%)',
  animation: `${slideInKeyframes} 0.42s forwards`,
  animationDelay: '0.42s',
});
