import createColorPickerStore, {
  ColorPickerContext,
} from '@/stores/createColorPickerStore';
import useModal from '@/stores/useModal';
import Modal from '@/utils/components/Modal';
import { Check } from 'lucide-react';
import { useRef } from 'react';
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

function ColorPicker({ color, onChangeColor, direction, x, y }: Props) {
  const colorPickerStore = useRef(createColorPickerStore(color)).current;

  const { removeModal } = useModal();

  const xPosition = direction === 'right' ? 'left' : 'right';

  const xPositionValue =
    direction === 'right' ? x : document.body.clientWidth - x;

  return (
    <ColorPickerContext.Provider value={colorPickerStore}>
      <div className={style.dim} onClick={removeModal}>
        <div
          style={{
            top: y,
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

          <HexPicker />

          <div className={style.bottom}>
            <PickerTypeSelect />
            <button
              className={style.applyButton}
              onClick={() => onChangeColor(colorPickerStore.getState().color)}
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
