import useCreatePaletteColours from '@/stores/useCreatePaletteColours';
import { getForegroundColourType } from '@/utils/functions';
import { Check } from 'lucide-react';
import * as style from './style.css';

type Props = {
  colour: string;
  isDefaultColor: boolean;
};

function ShadeInfo({ colour, isDefaultColor }: Props) {
  const { selectedIndex, setColour } = useCreatePaletteColours();

  const textColor =
    getForegroundColourType(colour) === 'white' ? '#FFFFFF' : '#333333';

  function handleClick() {
    setColour(selectedIndex, colour);

    const event = new CustomEvent('changeAsideColour', { detail: { colour } });
    window.dispatchEvent(event);
  }

  return (
    <div
      onClick={handleClick}
      className={style.shadeInfo}
      style={{ backgroundColor: `#${colour}` }}
    >
      <p className={style.colorCode} style={{ color: textColor }}>
        {colour}
      </p>
      {isDefaultColor && (
        <Check size={18} color={textColor} className={style.icon} />
      )}
    </div>
  );
}

export default ShadeInfo;
