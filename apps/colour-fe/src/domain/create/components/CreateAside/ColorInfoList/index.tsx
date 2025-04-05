import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { hexToRgb, rgbToCmyk, rgbToHsl, rgbToHsv, rgbToLab } from '@colour/fx';
import ColorInfo from '../ColorInfo';
import * as style from './style.css';

function ColorInfoList() {
  const { selectedIndex, colors } = useCreatePaletteColors();

  const color = colors[selectedIndex];

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
