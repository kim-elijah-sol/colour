import useCreatePaletteColours from '@/stores/useCreatePaletteColours';
import { hexToRgb, rgbToCmyk, rgbToHsl, rgbToHsv, rgbToLab } from '@colour/fx';
import ColourInfo from '../ColourInfo';
import * as style from './style.css';

function ColourInfoList() {
  const { selectedIndex, colours } = useCreatePaletteColours();

  const colour = colours[selectedIndex];

  return (
    <ul className={style.container}>
      <ColourInfo label='HEX' value={`#${colour}`} />
      <ColourInfo label='RGB' value={hexToRgb(colour).join(', ')} />
      <ColourInfo label='HSL' value={rgbToHsl(hexToRgb(colour)).join(', ')} />
      <ColourInfo label='HSV' value={rgbToHsv(hexToRgb(colour)).join(', ')} />
      <ColourInfo label='CMYK' value={rgbToCmyk(hexToRgb(colour)).join(', ')} />
      <ColourInfo
        label='LAB'
        value={rgbToLab(hexToRgb(colour)).map(Math.round).join(', ')}
      />
    </ul>
  );
}

export default ColourInfoList;
