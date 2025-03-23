import { clickableStyle, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const backgroundBarStyle = style({
  width: 480,
  height: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  ...padding({ x: 16 }),
});

export const colorChangeButtonStyle = style([
  clickableStyle.dark,
  {
    fontSize: 20,
    borderRadius: 12,
    ...padding({ x: 16, y: 6 }),
  },
]);

export const whiteColorChangeButtonStyle = style([
  colorChangeButtonStyle,
  clickableStyle.white,
  {
    color: '#FFFFFF',
  },
]);

export const toolBarStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
});

export const toolButtonStyle = style([
  clickableStyle.dark,
  {
    height: 36,
    width: 36,
    borderRadius: 12,
    ...padding(6),
  },
]);

export const whiteToolButtonStyle = style([
  toolButtonStyle,
  clickableStyle.white,
]);
