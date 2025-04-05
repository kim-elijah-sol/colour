import { vars } from '@/styles/theme.css';
import { flex } from '@/utils/styles';
import { keyframes, style } from '@vanilla-extract/css';

export const submitButton = style([
  flex({ align: 'center', justify: 'center' }),
  {
    backgroundColor: vars.color.brand,
    color: vars.color.white,
    fontWeight: 600,
    fontSize: 14,
    height: 36,
    width: 100,
    borderRadius: 12,
    cursor: 'pointer',
    gap: 6,
    transition: '0.21s',
    ':hover': {
      backgroundColor: `rgba(0,106,255,0.6)`,
    },
    ':active': {
      backgroundColor: `#005BDB`,
    },
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
