import { useColorPickerContext } from '@/stores/createColorPickerContext';
import { hexToRgb, hslToRgb, rgbToHex, rgbToHsl } from '@/utils/functions';
import useHueSlider from '../HexPicker/useHueSlider';
import * as style from '../RGBSlider/style.css';
import Slider from '../Slider';
import useHSLInput from './useHSLInput';

function HSLSlider() {
  const { color } = useColorPickerContext();

  const hueSlider = useHueSlider(100);

  const hueInput = useHSLInput('H');

  const saturationBackground = (() => {
    const [h, , l] = rgbToHsl(hexToRgb(color));

    const left = rgbToHex(hslToRgb([h, 0, l]));
    const center = rgbToHex(hslToRgb([h, 50, l]));
    const right = rgbToHex(hslToRgb([h, 100, l]));

    return `linear-gradient(to right, #${left}, #${center}, #${right})`;
  })();

  const luminanceBackground = (() => {
    const [h, s] = rgbToHsl(hexToRgb(color));

    const left = rgbToHex(hslToRgb([h, s, 0]));
    const center = rgbToHex(hslToRgb([h, s, 50]));
    const right = rgbToHex(hslToRgb([h, s, 100]));

    return `linear-gradient(to right, #${left}, #${center}, #${right})`;
  })();

  return (
    <div className={style.container}>
      <div className={style.pickerContainer}>
        <div>
          <div className={style.top}>
            <p className={style.label}>Hue</p>
            <input className={style.input} type='text' {...hueInput} />
          </div>

          <Slider
            ref={hueSlider.sliderRef}
            left={hueSlider.sliderLeft}
            onMouseDown={hueSlider.onMouseDown}
            background='linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)'
          />
        </div>

        <div>
          <div className={style.top}>
            <p className={style.label}>Saturation</p>
            <input className={style.input} type='text' />
          </div>

          <Slider background={saturationBackground} />
        </div>

        <div>
          <div className={style.top}>
            <p className={style.label}>Luminance</p>
            <input className={style.input} type='text' />
          </div>

          <Slider background={luminanceBackground} />
        </div>
      </div>
    </div>
  );
}

export default HSLSlider;
