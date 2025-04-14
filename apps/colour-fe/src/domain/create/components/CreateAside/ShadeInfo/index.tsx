import useCreatePaletteColours from '@/stores/useCreatePaletteColours';
import { getForegroundColourType } from '@/utils/functions';
import { Check } from 'lucide-react';
import * as style from './style.css';

type Props = {
  colour: string;
  isDefaultColour: boolean;
};

function ShadeInfo({ colour, isDefaultColour }: Props) {
  const { selectedIndex, setColour } = useCreatePaletteColours();

  const textColour =
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
      <p className={style.colourCode} style={{ color: textColour }}>
        {colour}
      </p>
      {isDefaultColour && (
        <Check size={18} color={textColour} className={style.icon} />
      )}
    </div>
  );
}

export default ShadeInfo;
