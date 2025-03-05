import { ColorPickerContext } from '@/stores/createColorPickerStore';
import { useContext } from 'react';
import { useStore } from 'zustand';
import * as style from './style.css';
import useHexInput from './useHexInput';
import useHueSlider from './useHueSlider';
import usePicker from './usePicker';

function HexPicker() {
  const colorPickerStore = useContext(ColorPickerContext);

  const color = useStore(colorPickerStore!, (state) => state.color);

  const {
    pickerRef,
    pickerHighlightColor,
    contollerLeft,
    contollerBottom,
    ...pickerProps
  } = usePicker();

  const { sliderRef, sliderLeft, ...sliderProps } = useHueSlider();

  const hexInput = useHexInput();

  return (
    <div className={style.container}>
      <div className={style.pickerContainer}>
        <div
          ref={pickerRef}
          className={style.picker}
          style={{
            background: `linear-gradient(to right, #FFFFFF, #${pickerHighlightColor})`,
          }}
          {...pickerProps}
        >
          <div
            className={style.pickerController}
            style={{
              left: contollerLeft,
              bottom: contollerBottom,
            }}
          />
        </div>
        <div ref={sliderRef} className={style.slider} {...sliderProps}>
          <div
            style={{
              left: `${sliderLeft}%`,
            }}
            className={style.sliderController}
          />
        </div>
        <div className={style.inputBox}>
          <input type='text' className={style.input} {...hexInput} />
          <div
            style={{ background: `#${color}` }}
            className={style.previewColorBox}
          />
        </div>
      </div>
    </div>
  );
}

export default HexPicker;
