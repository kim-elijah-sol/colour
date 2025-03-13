import { useColorPickerContext } from '@/stores/createColorPickerContext';
import Slider from '../Slider';
import * as style from './style.css';
import useHexInput from './useHexInput';
import useHueSlider from './useHueSlider';
import usePicker from './usePicker';

function HexPicker() {
  const color = useColorPickerContext().color;

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
        <Slider
          ref={sliderRef}
          left={sliderLeft}
          {...sliderProps}
          background='linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)'
        />
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
