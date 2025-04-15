import { flex, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const container = style([
  flex({ align: 'center' }),
  {
    gap: 16,
  },
]);

export const inputWrapper = style({
  position: 'relative',
  flex: 1,
  '::after': {
    content: '#',
    position: 'absolute',
    fontSize: 16,
    fontWeight: 600,
    color: '#333',
    left: 16,
    top: '50%',
    transform: `translateY(-50%)`,
  },
});

export const input = style({
  ...padding({ left: 26 }),
});
