import { vars } from '@/styles/theme.css';
import { flex, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const aside = style([
  flex({
    direction: 'column',
    align: 'center',
  }),
  {
    position: 'absolute',
    left: 0,
    top: 0,
    height: `calc(100vh - ${vars.size.headerHeight})`,
    width: vars.size.asideWidth,
    zIndex: 90,
    background: vars.color.white,
    boxShadow: '0 0 32px 8px rgba(50, 50, 50, 0.05)',
    ...padding({ x: 8, y: 16 }),
    gap: 24,
  },
]);

export const anchor = style([
  flex({
    direction: 'column',
    align: 'center',
  }),
  {
    gap: 4,
    textDecoration: 'none',
    ':hover': {},
  },
]);

export const iconHolder = style([
  flex({
    align: 'center',
    justify: 'center',
  }),
  {
    width: 32,
    height: 32,
    borderRadius: 8,
    transition: '0.21s',
    selectors: {
      [`${anchor}:hover &`]: {
        background: '#F1F1F1',
      },
    },
  },
]);

export const icon = style({
  transition: '0.21s',
  selectors: {
    [`${anchor}:hover &`]: {
      stroke: vars.color.text,
    },
  },
});

export const anchorText = style({
  fontSize: 14,
  selectors: {
    [`${anchor}:hover &`]: {
      color: `${vars.color.text} !important`,
    },
  },
});
