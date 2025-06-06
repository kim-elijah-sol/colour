import { hexToRgb } from '@colour/fx';
import { createTheme } from '@vanilla-extract/css';

const hexToRGBAValue = (hex: string, alpha: number = 1) =>
  `rgba(${hexToRgb(hex).join(', ')}, ${alpha})`;

export const [themeClass, vars] = createTheme({
  colour: {
    brand: hexToRGBAValue('006AFF'),
    white: hexToRGBAValue('FFFFFF'),
    black: hexToRGBAValue('000000'),
    text: hexToRGBAValue('333333'),
    red: hexToRGBAValue('FF006A'),
    green: hexToRGBAValue('00F05F'),
    background: hexToRGBAValue('F6F8FA'),
    warning: hexToRGBAValue('FF1216'),
  },
  size: {
    headerHeight: '64px',
    asideWidth: '80px',

    domain: {
      create: {
        asideWidth: '408px',
      },
    },
  },
  full: '100%',
  half: '50%',
  auto: 'auto',
});
