import { vars } from '@/styles/theme.css';
import { fixed, flex, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const aside = style([
  flex({
    direction: 'column',
    align: 'center',
  }),
  {
    ...fixed({
      top: vars.size.headerHeight,
      left: 0,
      bottom: 0,
    }),
    width: vars.size.asideWidth,
    zIndex: 90,
    background: vars.colour.white,
    ...padding({ x: 8, y: 16 }),
    gap: 24,
    borderRight: '1px solid #F3F3F3',
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
  stroke: '#BCBCBC',
  selectors: {
    [`${anchor}:hover &`]: {
      stroke: vars.colour.text,
    },
  },
});

export const activeIcon = style([
  icon,
  {
    stroke: vars.colour.text,
  },
]);

export const anchorText = style({
  fontSize: 14,
  color: '#BCBCBC',
  fontWeight: 600,
  selectors: {
    [`${anchor}:hover &`]: {
      color: `${vars.colour.text} !important`,
    },
  },
});

export const activeAnchorText = style([
  anchorText,
  {
    color: vars.colour.text,
    fontWeight: 800,
  },
]);
