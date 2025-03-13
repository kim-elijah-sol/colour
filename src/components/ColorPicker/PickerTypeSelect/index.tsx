import {
  PickerType,
  useColorPickerContext,
} from '@/stores/createColorPickerContext';
import classNames from 'classnames';
import { ChevronUp } from 'lucide-react';
import { useState } from 'react';
import * as style from './style.css';

const OPTIONS: PickerType[] = ['hex', 'rgb', 'hsl', 'hsv', 'cmyk', 'lab'];

function PickerTypeSelect() {
  const { pickerType, setPickerType } = useColorPickerContext();

  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={style.container}>
      <button className={style.button} onClick={() => setIsOpened(!isOpened)}>
        <p className={classNames(style.text, style.selectText)}>
          {pickerType.toUpperCase()}
        </p>
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
              className={classNames(
                style.option,
                it === pickerType ? style.selectText : undefined
              )}
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
