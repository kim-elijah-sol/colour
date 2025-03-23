import { getForegroundColorType } from '@/utils/functions';
import { Check } from 'lucide-react';
import * as style from './style.css';

type Props = {
  color: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function PaletteColorButton({ color, isSelected, onClick }: Props) {
  const iconColor = getForegroundColorType(color);

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

export default PaletteColorButton;
