import {
  ColorPickerContext,
  PickerType,
} from '@/stores/createColorPickerStore';
import classNames from 'classnames';
import { ChevronUp } from 'lucide-react';
import { useContext, useState } from 'react';
import { useStore } from 'zustand';
import * as style from './style.css';

const OPTIONS: PickerType[] = ['hex', 'rgb'];

function PickerTypeSelect() {
  const colorPickerStore = useContext(ColorPickerContext);

  const { pickerType, setPickerType } = useStore(colorPickerStore!);

  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={style.container}>
      <button className={style.button} onClick={() => setIsOpened(!isOpened)}>
        <p className={style.text}>{pickerType.toUpperCase()}</p>
        <ChevronUp
          size={20}
          className={classNames([
            style.icon,
            isOpened ? style.openedIcon : undefined,
          ])}
        />
      </button>
      {isOpened && (
        <div className={style.optionsContainer}>
          {OPTIONS.map((it) => (
            <button
              className={style.option}
              key={it}
              onClick={() => {
                setIsOpened(false);
                setPickerType(it);
              }}
            >
              {it.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default PickerTypeSelect;
