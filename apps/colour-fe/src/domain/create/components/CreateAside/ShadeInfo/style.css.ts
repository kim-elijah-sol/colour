import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const shadeInfo = style({
  width: vars.full,
  height: 36,
  cursor: 'pointer',
  textAlign: 'center',
  position: 'relative',
});

export const colourCode = style({
  lineHeight: '36px',
  fontSize: 13,
  fontWeight: 700,
  transition: '0.21s',
  opacity: 0,

  selectors: {
    [`${shadeInfo}:hover &`]: {
      opacity: 1,
    },
  },
});

export const icon = style({
  transition: '0.21s',
  position: 'absolute',
  left: vars.half,
  top: vars.half,
  transform: `translate(-50%, -50%)`,

  selectors: {
    [`${shadeInfo}:hover &`]: {
      opacity: 0,
    },
  },
});
