import { ForegroundColorType } from '@colour/types';
import { getContrastRatio } from './getContrastRatio';

export function getForegroundColorType(hex: string): ForegroundColorType {
  const whiteConstrast = getContrastRatio(hex, 'FFFFFF');
  const blackConstrast = getContrastRatio(hex, '000000');

  return whiteConstrast > blackConstrast ? 'white' : 'black';
}
