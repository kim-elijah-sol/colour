import { margin } from '@/utils/styles';
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
    ...margin({ bottom: 16 }),
  }),
} as const;

export default userContentStyles;
