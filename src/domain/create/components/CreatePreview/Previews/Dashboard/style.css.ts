import { vars } from '@/styles/theme.css';
import { flex, padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const container = style([
  flex(),
  {
    width: vars.full,
    height: vars.full,
  },
]);

export const aside = style([
  flex({ direction: 'column', justify: 'between' }),
  {
    flex: 1,
    ...padding({ top: 80, x: 24, bottom: 24 }),
  },
]);

export const asideTop = style([
  flex({
    direction: 'column',
    align: 'center',
  }),
  {},
]);

export const logo = style({
  width: 70,
  marginBottom: 60,
});

export const menus = style([
  flex({
    direction: 'column',
  }),
  {
    width: vars.full,
    gap: 24,
  },
]);

export const menu = style([
  flex({
    align: 'center',
  }),
  {
    gap: 12,
  },
]);

export const menuTitle = style({
  fontSize: 18,
  fontWeight: 700,
});

export const page = style({
  flex: 4,
  background: vars.color.white,
  padding: 24,
  overflowY: vars.auto,
});

export const hello = style({
  fontSize: 32,
  fontWeight: 600,
  marginBottom: 32,
});

export const row = style([
  flex(),
  {
    gap: 8,
    marginBottom: 24,
  },
]);

export const row1Card = style({
  flex: 1,
  padding: 14,
  borderRadius: 12,
});

export const row1CardTop = style([
  flex({ align: 'center' }),
  {
    gap: 8,
    marginBottom: 12,
  },
]);

export const row1CardTitle = style({
  fontSize: 12,
  fontWeight: 600,
});

export const row1CardValue = style({
  fontSize: 20,
  fontWeight: 600,
});

export const row2Card = style([
  row1Card,
  {
    border: `1px solid #eeeeee`,
  },
]);
