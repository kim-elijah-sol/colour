import { flex } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const container = style([
  flex({ align: 'center' }),
  {
    marginBottom: 32,
    gap: 8,
    width: 480,
  },
]);
