import { vars } from '@/styles/theme.css';
import { flex, margin, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const card = style({
  ...padding(12),
  backgroundColor: vars.colour.white,
  borderRadius: 16,
  boxShadow: '0 0 6px 2px rgba(100,100,100,0.03)',
});

export const top = style([
  flex(),
  {
    borderRadius: 6,
    overflow: 'hidden',
    ...margin({ bottom: 12 }),
    height: 80,
    position: 'relative',
  },
]);

export const goCreate = style([
  flex({ align: 'center', justify: 'center' }),
  {
    position: 'absolute',
    inset: 0,
    opacity: 0,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: '.21s',
    ':hover': {
      opacity: 1,
    },
  },
]);

export const openInCreateText = style({
  fontSize: 18,
  fontWeight: 700,
  backgroundClip: 'text !important',
  WebkitBackgroundClip: 'text !important',
  WebkitTextFillColor: 'transparent',
});

export const colorItem = style({
  flex: 1,
});

export const bottom = flex({ justify: 'around' });

export const bottomButton = style([
  flex({ align: 'center' }),
  {
    ...padding({ x: 8, y: 4 }),
    transition: '0.21s',
    cursor: 'pointer',
    borderRadius: 6,
    backgroundColor: 'transparent',
    ':hover': {
      backgroundColor: '#F2F5F9',
    },
    ':active': {
      backgroundColor: '#E0E6ED',
    },
  },
]);

export const bottomButtonText = style({
  fontWeight: 600,
  fontSize: 14,
  color: '#666',
});

export const divisionBar = style({
  width: vars.full,
  height: 1,
  background: 'linear-gradient(to right, transparent, #EEE, transparent)',
  ...margin({ y: 12 }),
});

export const toolRow = flex({ justify: 'end' });

export const likeButtonText = style([
  bottomButtonText,
  {
    ...margin({ left: 6 }),
  },
]);
