import Modal from '@/utils/components/Modal';
import { Check } from 'lucide-react';
import { useMemo, useState } from 'react';
import HexPicker from './HexPicker';

import * as style from './style.css';

type Props = {
  color: string;
  onChangeColor: (color: string) => void;
  direction: 'left' | 'right';
  x: number;
  y: number;
};

function ColorPicker({ color: _color, onChangeColor, direction, x, y }: Props) {
  const [color, setColor] = useState(_color);

  const xPosition = direction === 'right' ? 'left' : 'right';

  const xPositionValue =
    direction === 'right' ? x : document.body.clientWidth - x;

  return (
    <div
      style={{
        top: y,
        [xPosition]: xPositionValue,
      }}
      className={
        direction === 'right' ? style.toRightContainer : style.toLeftContainer
      }
    >
      <Modal.Header right={<Modal.Header.CloseButton />}>
        Color Picker
      </Modal.Header>

      <HexPicker color={color} />

      <div className={style.bottom}>
        <button
          className={style.applyButton}
          onClick={() => onChangeColor(color)}
        >
          <Check size={24} />
        </button>
      </div>
    </div>
  );
}

export default ColorPicker;
