import { flex } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const bottom = style([
  flex({
    align: 'center',
    justify: 'between',
  }),
  {
    position: 'relative',
    marginTop: 8,
  },
]);
