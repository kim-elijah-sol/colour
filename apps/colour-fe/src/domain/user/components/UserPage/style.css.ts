import { vars } from '@/styles/theme.css';
import { flex } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const userPage = style([
  flex(),
  {
    flex: 1,
    backgroundColor: vars.colour.white,
    overflow: 'hidden',
    borderRadius: 16,
    boxShadow: '0 0 8px 4px rgba(50, 50, 50, 0.03)',
  },
]);
