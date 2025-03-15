import { useColorPickerContext } from '@/stores/createColorPickerContext';
import { hexToRgb, hsvToRgb, rgbToHex, rgbToHsv } from '@/utils/functions';
import { useEffect, useState } from 'react';
import * as style from '../RGBSlider/style.css';
import Slider from '../Slider';
import useHSVInput from './useHSVInput';
import useHSVSlider from './useHSVSlider';

function HSVSlider() {
  const { color, setColor } = useColorPickerContext();

  const hsv = rgbToHsv(hexToRgb(color));

  const [hue, setHue] = useState<number>(hsv[0] / 3.6);
  const [saturation, setSaturation] = useState<number>(hsv[1]);
  const [value, setValue] = useState<number>(hsv[2]);

  const hueSlider = useHSVSlider({
    setValue: setHue,
    channel: 'H',
  });
  const saturationSlider = useHSVSlider({
    setValue: setSaturation,
    channel: 'S',
  });
  const valueSlider = useHSVSlider({
    setValue: setValue,
    channel: 'V',
  });

  const hueInput = useHSVInput({
    defaultValue: hue * 3.6,
    setValue: setHue,
    channel: 'H',
  });
  const saturationInput = useHSVInput({
    defaultValue: saturation,
    setValue: setSaturation,
    channel: 'S',
  });
  const valueInput = useHSVInput({
    defaultValue: value,
    setValue: setValue,
    channel: 'V',
  });

  useEffect(() => {
    setColor(rgbToHex(hsvToRgb([hue * 3.6, saturation, value])));
  }, [hue, saturation, value]);

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
            <p className={style.label}>Value</p>
            <input className={style.input} type='text' {...valueInput} />
          </div>

          <Slider
            ref={valueSlider.sliderRef}
            left={value}
            onMouseDown={valueSlider.onMouseDown}
            background={valueSlider.background}
          />
        </div>
      </div>
    </div>
  );
}

export default HSVSlider;
