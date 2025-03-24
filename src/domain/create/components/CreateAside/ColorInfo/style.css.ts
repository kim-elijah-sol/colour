import { vars } from '@/styles/theme.css';
import { flex } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const container = style([
  flex({ justify: 'between', align: 'center' }),
  {
    padding: 8,
    borderRadius: 8,
    transition: '0.21s',
    cursor: 'pointer',
    ':hover': {
      background: '#f1f1f1',
    },
  },
]);

export const label = style({
  fontSize: 13,
  opacity: 0.5,
  fontWeight: 600,
  marginBottom: 4,
});

export const value = style({
  fontSize: 16,
  fontWeight: 700,
});

export const rightIcon = style({
  stroke: vars.color.text,
  opacity: 0,
  transition: 'opacity 0.21s',
  selectors: {
    [`${container}:hover &`]: {
      opacity: 1,
    },
  },
});
