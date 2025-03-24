import {
  hexToRgb,
  rgbToCmyk,
  rgbToHsl,
  rgbToHsv,
  rgbToLab,
} from '@/utils/functions';
import ColorInfo from '../ColorInfo';
import * as style from './style.css';

type Props = {
  color: string;
};

function ColorInfoList({ color }: Props) {
  return (
    <ul className={style.container}>
      <ColorInfo label='HEX' value={`#${color}`} />
      <ColorInfo label='RGB' value={hexToRgb(color).join(', ')} />
      <ColorInfo label='HSL' value={rgbToHsl(hexToRgb(color)).join(', ')} />
      <ColorInfo label='HSV' value={rgbToHsv(hexToRgb(color)).join(', ')} />
      <ColorInfo label='CMYK' value={rgbToCmyk(hexToRgb(color)).join(', ')} />
      <ColorInfo
        label='LAB'
        value={rgbToLab(hexToRgb(color)).map(Math.round).join(', ')}
      />
    </ul>
  );
}

export default ColorInfoList;
