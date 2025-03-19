import { margin, styleToken } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const paletteEditorContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: 16,
  overflow: 'hidden',
  width: 'max-content',
  ...margin({ x: styleToken.auto, bottom: 64 }),
  boxShadow: '0 0 24px 8px rgba(70,70,70,0.05)',
});
