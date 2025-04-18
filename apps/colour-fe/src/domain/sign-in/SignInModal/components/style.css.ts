import { vars } from '@/styles/theme.css';
import { brandButtonCSS, flex, margin, padding } from '@/utils/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  width: 360,
  ...padding(12),
  backgroundColor: vars.colour.white,
});

const rollingWrapper = style({
  position: 'relative',
  overflow: 'hidden',
});

export const titleWrapper = style([
  rollingWrapper,
  {
    height: 38,
    ...margin({ bottom: 8 }),
  },
]);

export const rolling = style({
  transition: '0.21s',
});

export const title = style({
  fontSize: 28,
  fontWeight: 700,
  textAlign: 'center',
  lineHeight: '38px',
});

export const descriptionWrapper = style([
  rollingWrapper,
  {
    height: 24,
    ...margin({ bottom: 32 }),
  },
]);

export const description = style({
  fontSize: 16,
  textAlign: 'center',
  lineHeight: '24px',
  color: '#666666',
});

export const inputBox = style({
  minWidth: 336,
  transition: '0.21s',
});

export const input = style({
  minWidth: vars.full,
  height: 46,
  lineHeight: '46px',
  fontSize: 16,
  fontWeight: 600,
  ...padding({ x: 16 }),
  color: '#333',
  border: '1px solid #E0E0E0',
  borderRadius: 12,
  transition: '0.21s',
  ':focus': {
    borderColor: vars.colour.brand,
  },
  '::placeholder': {
    color: '#BBBBBB',
  },
});

export const button = style([
  brandButtonCSS,
  flex({ align: 'center', justify: 'center' }),
  {
    width: vars.full,
    height: 46,
    ...margin({ top: 24 }),
    borderRadius: 12,
    fontSize: 16,
    fontWeight: 600,
  },
]);

export const inputWrapper = style({
  overflow: 'hidden',
  transition: '0.21s',
});

export const inputRolling = style([
  flex(),
  {
    transition: '0.21s',
  },
]);

export const passwordGuideWrapper = style([
  flex({ wrap: 'wrap' }),
  {
    gap: '4px 12px',
    ...margin({ top: 8 }),
    ...padding({ x: 8 }),
  },
]);

export const passwordGuideItem = style([
  flex({ align: 'center' }),
  {
    gap: 8,
  },
]);

const _passwordGuideCircle = style({
  width: 4,
  height: 4,
  borderRadius: vars.half,
  transition: '0.21s',
});

export const passwordGuideCircle = styleVariants({
  pass: [_passwordGuideCircle, { backgroundColor: vars.colour.brand }],
  nonePass: [_passwordGuideCircle, { backgroundColor: '#AAAAAA' }],
});

export const _passwordGuideText = style({
  fontSize: 13,
  transition: '0.21s',
  fontWeight: 600,
});

export const passwordGuideText = styleVariants({
  pass: [_passwordGuideText, { color: vars.colour.brand }],
  nonePass: [_passwordGuideText, { color: '#AAAAAA' }],
});
