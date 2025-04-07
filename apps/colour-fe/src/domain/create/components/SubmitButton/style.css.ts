import { brandButtonCSS, flex } from '@/utils/styles';
import { keyframes, style } from '@vanilla-extract/css';

export const submitButton = style([
  flex({ align: 'center', justify: 'center' }),
  brandButtonCSS,
  {
    fontWeight: 600,
    fontSize: 14,
    height: 36,
    width: 100,
    borderRadius: 12,
    gap: 6,
  },
]);

const loaderKeyframes = keyframes({
  to: {
    transform: 'rotate(1turn)',
  },
});

export const loader = style({
  animation: `${loaderKeyframes} 1s infinite linear`,
});
