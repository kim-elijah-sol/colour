import { getForegroundColourType } from '@/utils/functions';
import { Check } from 'lucide-react';
import * as style from './style.css';

type Props = {
  colour: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function PaletteColourButton({ colour, isSelected, onClick }: Props) {
  const iconColour = getForegroundColourType(colour);

  return (
    <button
      className={style.button}
      style={{
        backgroundColor: `#${colour}`,
      }}
      onClick={onClick}
    >
      {isSelected && <Check size={24} color={iconColour} />}
    </button>
  );
}

export default PaletteColourButton;
