import { vars } from '@/styles/theme.css';
import { flex, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const aside = style([
  flex({ direction: 'column' }),
  {
    width: vars.size.domain.create.asideWidth,
    height: vars.full,
    background: vars.color.white,
    boxShadow: '0 0 16px 8px rgba(50, 50, 50, 0.05)',
    ...padding(16),
  },
]);
