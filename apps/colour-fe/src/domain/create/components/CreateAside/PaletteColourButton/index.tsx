import { getForegroundColourType } from '@/utils/functions';
import { Check } from 'lucide-react';
import * as style from './style.css';

type Props = {
  color: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function PaletteColourButton({ color, isSelected, onClick }: Props) {
  const iconColor = getForegroundColourType(color);

  return (
    <button
      className={style.button}
      style={{
        backgroundColor: `#${color}`,
      }}
      onClick={onClick}
    >
      {isSelected && <Check size={24} color={iconColor} />}
    </button>
  );
}

export default PaletteColourButton;
