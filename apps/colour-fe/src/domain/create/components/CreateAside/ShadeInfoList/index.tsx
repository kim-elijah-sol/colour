import useCreatePaletteColours from '@/stores/useCreatePaletteColours';
import { getShades } from '@/utils/functions';
import ShadeInfo from '../ShadeInfo';
import * as style from './style.css';

function ShadeInfoList() {
  const { selectedIndex, colours } = useCreatePaletteColours();

  const colour = colours[selectedIndex];

  const shades = getShades(colour);

  return (
    <div className={style.container}>
      {shades.map((it) => (
        <ShadeInfo colour={it} key={it} isDefaultColor={it === colour} />
      ))}
    </div>
  );
}

export default ShadeInfoList;
