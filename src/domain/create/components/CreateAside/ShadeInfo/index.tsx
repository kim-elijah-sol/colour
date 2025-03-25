import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { getForegroundColorType } from '@/utils/functions';
import { Check } from 'lucide-react';
import * as style from './style.css';

type Props = {
  color: string;
  isDefaultColor: boolean;
};

function ShadeInfo({ color, isDefaultColor }: Props) {
  const { selectedIndex, setColor } = useCreatePaletteColors();

  const textColor =
    getForegroundColorType(color) === 'white' ? '#FFFFFF' : '#333333';

  return (
    <div
      onClick={() => setColor(selectedIndex, color)}
      className={style.shadeInfo}
      style={{ backgroundColor: `#${color}` }}
    >
      <p className={style.colorCode} style={{ color: textColor }}>
        {color}
      </p>
      {isDefaultColor && (
        <Check size={18} color={textColor} className={style.icon} />
      )}
    </div>
  );
}

export default ShadeInfo;
