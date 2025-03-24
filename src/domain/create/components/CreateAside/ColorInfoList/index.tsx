import {
  hexToRgb,
  rgbToCmyk,
  rgbToHsl,
  rgbToHsv,
  rgbToLab,
} from '@/utils/functions';
import ColorInfo from '../ColorInfo';

type Props = {
  color: string;
};

function ColorInfoList({ color }: Props) {
  return (
    <>
      <ColorInfo label='HEX' value={`#${color}`} />
      <ColorInfo label='RGB' value={hexToRgb(color).join(', ')} />
      <ColorInfo label='HSL' value={rgbToHsl(hexToRgb(color)).join(', ')} />
      <ColorInfo label='HSV' value={rgbToHsv(hexToRgb(color)).join(', ')} />
      <ColorInfo label='CMYK' value={rgbToCmyk(hexToRgb(color)).join(', ')} />
      <ColorInfo
        label='LAB'
        value={rgbToLab(hexToRgb(color)).map(Math.round).join(', ')}
      />
    </>
  );
}

export default ColorInfoList;
