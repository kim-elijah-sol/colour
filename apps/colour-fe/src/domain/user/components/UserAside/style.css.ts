import { flex, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const container = style([
  flex({ direction: 'column' }),
  {
    ...padding({ x: 20, y: 60 }),
    width: 240,
    borderRight: '1px solid #F3F3F3',
  },
]);
