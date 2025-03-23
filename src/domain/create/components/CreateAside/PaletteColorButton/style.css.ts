import { vars } from '@/styles/theme.css';
import { flex } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const button = style([
  flex({
    align: 'center',
    justify: 'center',
  }),
  {
    flex: 1,
    height: `calc(calc(${vars.size.domain.create.asideWidth} - 32px) / 4)`,
    cursor: 'pointer',
    transition: '0.21s',
    ':hover': {
      transform: 'scale(0.9)',
    },
  },
]);
