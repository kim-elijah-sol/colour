import userContentStyles from '@/domain/user/styles/user-content-styles.css';
import { vars } from '@/styles/theme.css';
import { padding } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const textareaWrappr = style({
  position: 'relative',
  width: vars.full,
});

export const textarea = style([
  userContentStyles.input,
  {
    resize: 'none',
    ...padding({ x: 16, y: 12 }),
    height: 46 * 3 + 26,
    lineHeight: `${(46 * 3) / 5}px`,
  },
]);

export const lengthCount = style({
  position: 'absolute',
  right: 12,
  bottom: 12,
  fontSize: 14,
  color: '#888888',
});
