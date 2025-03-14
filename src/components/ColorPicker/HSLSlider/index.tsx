import { useColorPickerContext } from '@/stores/createColorPickerContext';
import { hexToRgb, hslToRgb, rgbToHex, rgbToHsl } from '@/utils/functions';
import { useEffect, useState } from 'react';
import * as style from '../RGBSlider/style.css';
import Slider from '../Slider';
import useHSLInput from './useHSLInput';
import useHSLSlider from './useHSLSlider';

function HSLSlider() {
  const { color, setColor } = useColorPickerContext();

  const hsl = rgbToHsl(hexToRgb(color));

  const [hue, setHue] = useState<number>(hsl[0] / 3.6);
  const [saturation, setSaturation] = useState<number>(hsl[1]);
  const [luminance, setLuminance] = useState<number>(hsl[2]);

  const hueSlider = useHSLSlider({
    setValue: setHue,
    channel: 'H',
  });
  const saturationSlider = useHSLSlider({
    setValue: setSaturation,
    channel: 'S',
  });
  const LuminanceSlider = useHSLSlider({
    setValue: setLuminance,
    channel: 'L',
  });

  const hueInput = useHSLInput({
    defaultValue: hue * 3.6,
    setValue: setHue,
    channel: 'H',
  });
  const saturationInput = useHSLInput({
    defaultValue: saturation,
    setValue: setSaturation,
    channel: 'S',
  });

  const luminanceInput = useHSLInput({
    defaultValue: luminance,
    setValue: setLuminance,
    channel: 'L',
  });

  useEffect(() => {
    setColor(rgbToHex(hslToRgb([hue * 3.6, saturation, luminance])));
  }, [hue, saturation, luminance]);

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
            left={hue}
            onMouseDown={hueSlider.onMouseDown}
            background='linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)'
          />
        </div>

        <div>
          <div className={style.top}>
            <p className={style.label}>Saturation</p>
            <input className={style.input} type='text' {...saturationInput} />
          </div>

          <Slider
            ref={saturationSlider.sliderRef}
            left={saturation}
            onMouseDown={saturationSlider.onMouseDown}
            background={saturationSlider.background}
          />
        </div>

        <div>
          <div className={style.top}>
            <p className={style.label}>Luminance</p>
            <input className={style.input} type='text' {...luminanceInput} />
          </div>

          <Slider
            ref={LuminanceSlider.sliderRef}
            left={luminance}
            onMouseDown={LuminanceSlider.onMouseDown}
            background={LuminanceSlider.background}
          />
        </div>
      </div>
    </div>
  );
}

export default HSLSlider;
