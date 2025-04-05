import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { getShades } from '@/utils/functions';
import ShadeInfo from '../ShadeInfo';
import * as style from './style.css';

function ShadeInfoList() {
  const { selectedIndex, colors } = useCreatePaletteColors();

  const color = colors[selectedIndex];

  const shades = getShades(color);

  return (
    <div className={style.container}>
      {shades.map((it) => (
        <ShadeInfo color={it} key={it} isDefaultColor={it === color} />
      ))}
    </div>
  );
}

export default ShadeInfoList;
