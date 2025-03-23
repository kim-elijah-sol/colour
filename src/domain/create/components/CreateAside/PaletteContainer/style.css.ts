import { flex, margin } from '@/utils/styles';
import { style } from '@vanilla-extract/css';

export const container = style([flex(), { ...margin({ bottom: 16 }) }]);
