import { getShades } from '@/utils/functions';
import ShadeInfo from '../ShadeInfo';
import * as style from './style.css';

type Props = {
  color: string;
};

function ShadeInfoList({ color }: Props) {
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
