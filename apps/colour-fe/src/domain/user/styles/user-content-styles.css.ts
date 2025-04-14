import { vars } from '@/styles/theme.css';
import { brandButtonCSS, flex, margin, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

const userContentStyles = {
  title: style({
    fontSize: 32,
    fontWeight: 700,
    ...margin({ bottom: 8 }),
  }),
  description: style({
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '32px',
    color: '#9AABB7',
    ...margin({ bottom: 40 }),
  }),
  sectionList: style([
    flex({ direction: 'column' }),
    {
      gap: 32,
    },
  ]),
  section: flex({ direction: 'column' }),
  sectionTitle: style({
    fontSize: 22,
    fontWeight: 700,
    ...margin({ bottom: 20 }),
    borderBottom: '1px solid #EEEEEE',
  }),
  input: style({
    width: vars.full,
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
  }),
  form: style([
    flex({ direction: 'column' }),
    {
      gap: 16,
    },
  ]),
  button: style([
    brandButtonCSS,
    {
      fontWeight: 600,
      fontSize: 16,
      ...padding({ x: 16 }),
      height: 40,
      borderRadius: 12,
      alignSelf: 'flex-end',
    },
  ]),
} as const;

export default userContentStyles;
