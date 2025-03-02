import { clickableStyle, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const shadeItem = style({
  width: 480,
  ...padding(4),
});

export const shadeInner = style([
  clickableStyle.dark,
  {
    height: 36,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    gap: 8,
  },
]);

export const whiteShadeInner = style([shadeInner, clickableStyle.white]);

export const shadeItemText = style({
  fontSize: 16,
  fontWeight: 600,
});
