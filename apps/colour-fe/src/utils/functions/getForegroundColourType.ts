import { getContrastRatio } from './getContrastRatio';

type ForegroundColourType = 'white' | 'black';

export function getForegroundColourType(hex: string): ForegroundColourType {
  const whiteConstrast = getContrastRatio(hex, 'FFFFFF');
  const blackConstrast = getContrastRatio(hex, '000000');

  return whiteConstrast > blackConstrast ? 'white' : 'black';
}
