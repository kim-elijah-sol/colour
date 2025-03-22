import { hexToRgb } from '@/utils/functions';
import { createTheme } from '@vanilla-extract/css';

const hexToRGBAValue = (hex: string, alpha: number = 1) =>
  `rgba(${hexToRgb(hex).join(', ')}, ${alpha})`;

export const [themeClass, vars] = createTheme({
  color: {
    brand: hexToRGBAValue('006AFF'),
    white: hexToRGBAValue('FFFFFF'),
    black: hexToRGBAValue('000000'),
    text: hexToRGBAValue('333333'),
  },
});
