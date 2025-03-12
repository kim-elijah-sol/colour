import {
  ColorPickerContext,
  PickerType,
} from '@/stores/createColorPickerContext';
import useModal from '@/stores/useModal';
import Modal from '@/utils/components/Modal';
import { Check } from 'lucide-react';
import { useMemo, useState } from 'react';
import HexPicker from './HexPicker';
import PickerTypeSelect from './PickerTypeSelect';

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

  const [pickerType, setPickerType] = useState<PickerType>('hex');

  const { removeModal } = useModal();

  const xPosition = direction === 'right' ? 'left' : 'right';

  const xPositionValue =
    direction === 'right' ? x : document.body.clientWidth - x;

  const bottomPosition = useMemo(() => {
    const mouseFromBottom = window.innerHeight - y;

    return mouseFromBottom - 160;
  }, []);

  return (
    <ColorPickerContext.Provider
      value={{
        color,
        setColor,
        pickerType,
        setPickerType,
      }}
    >
      <div className={style.dim} onClick={removeModal}>
        <div
          style={{
            bottom: bottomPosition,
            [xPosition]: xPositionValue,
          }}
          className={
            direction === 'right'
              ? style.toRightContainer
              : style.toLeftContainer
          }
          onClick={(e) => e.stopPropagation()}
        >
          <Modal.Header right={<Modal.Header.CloseButton />}>
            Color Picker
          </Modal.Header>

          {pickerType === 'hex' && <HexPicker />}

          <div className={style.bottom}>
            <PickerTypeSelect />
            <button
              className={style.applyButton}
              onClick={() => onChangeColor(color)}
            >
              <Check size={24} />
            </button>
          </div>
        </div>
      </div>
    </ColorPickerContext.Provider>
  );
}

export default ColorPicker;
