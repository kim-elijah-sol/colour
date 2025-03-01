import { clickableStyle, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const infoList = style({
  ...padding(12),
  maxHeight: 400,
  overflowY: 'auto',
});

export const infoItem = style([
  clickableStyle.dark,
  {
    width: 480,
    ...padding({ x: 12, y: 8 }),
    borderRadius: 8,
    ':active': {
      transform: 'none !important',
    },
  },
]);

export const whiteInfoItem = style([infoItem, clickableStyle.white]);

export const infoItemInner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const infoItemTitle = style({
  fontSize: 11.5,
  color: '#000',
  opacity: 0.5,
  fontWeight: 600,
  marginBottom: 4,
});

export const infoItemValue = style({
  fontSize: 16,
  fontWeight: 600,
});

export const copyIcon = style({
  opacity: 0,
  transition: '0.21s',
  selectors: {
    [`${infoItem}:hover &`]: {
      opacity: 1,
    },
  },
});
