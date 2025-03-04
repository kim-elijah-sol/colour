import useModal from '@/stores/useModal';
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

  const { removeModal } = useModal();

  const xPosition = direction === 'right' ? 'left' : 'right';

  const xPositionValue =
    direction === 'right' ? x : document.body.clientWidth - x;

  return (
    <div className={style.dim} onClick={removeModal}>
      <div
        style={{
          top: y,
          [xPosition]: xPositionValue,
        }}
        className={
          direction === 'right' ? style.toRightContainer : style.toLeftContainer
        }
        onClick={(e) => e.stopPropagation()}
      >
        <Modal.Header right={<Modal.Header.CloseButton />}>
          Color Picker
        </Modal.Header>

        <HexPicker color={color} setColor={setColor} />

        <div className={style.bottom}>
          <button
            className={style.applyButton}
            onClick={() => onChangeColor(color)}
          >
            <Check size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
