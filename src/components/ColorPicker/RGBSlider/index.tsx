import { useColorPickerContext } from '@/stores/createColorPickerContext';
import Slider from '../Slider';
import * as style from './style.css';
import useRGBInput from './useRGBInput';
import useRGBSlider from './useRGBSlider';

function RGBSlider() {
  const { color } = useColorPickerContext();

  const red = useRGBSlider('R');
  const green = useRGBSlider('G');
  const blue = useRGBSlider('B');

  const redInput = useRGBInput('R');
  const greenInput = useRGBInput('G');
  const blueInput = useRGBInput('B');

  return (
    <div className={style.container}>
      <div className={style.pickerContainer}>
        <div>
          <div className={style.top}>
            <p className={style.label}>Red</p>
            <input className={style.input} type='text' {...redInput} />
          </div>
          <Slider
            ref={red.sliderRef}
            left={red.value / 2.55}
            onMouseDown={red.onMouseDown}
            background={red.background}
          />
        </div>

        <div>
          <div className={style.top}>
            <p className={style.label}>Green</p>
            <input className={style.input} type='text' {...greenInput} />
          </div>

          <Slider
            ref={green.sliderRef}
            left={green.value / 2.55}
            onMouseDown={green.onMouseDown}
            background={green.background}
          />
        </div>

        <div>
          <div className={style.top}>
            <p className={style.label}>Blue</p>
            <input className={style.input} type='text' {...blueInput} />
          </div>
          <Slider
            ref={blue.sliderRef}
            left={blue.value / 2.55}
            onMouseDown={blue.onMouseDown}
            background={blue.background}
          />
        </div>
      </div>
    </div>
  );
}

export default RGBSlider;
