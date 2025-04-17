import { padding } from '@/utils/styles';
import { warningButtonCSS } from '@/utils/styles/warningButton.css';
import { style } from '@vanilla-extract/css';

export const button = style([
  warningButtonCSS,
  {
    fontWeight: 600,
    fontSize: 16,
    ...padding({ x: 16 }),
    height: 40,
    borderRadius: 12,
    alignSelf: 'flex-end',
  },
]);
