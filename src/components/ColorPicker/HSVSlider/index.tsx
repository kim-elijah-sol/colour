import { useColorPickerContext } from '@/stores/createColorPickerContext';
import { HSV } from '@/types';
import { hexToRgb, hsvToRgb, rgbToHex, rgbToHsv } from '@/utils/functions';
import { useState } from 'react';
import * as style from '../RGBSlider/style.css';
import Slider from '../Slider';
import useIgnoreFirstEffect from '../useIgnoreFirstEffect';
import useHSVInput from './useHSVInput';
import useHSVSlider from './useHSVSlider';

function HSVSlider() {
  const { color, setColor } = useColorPickerContext();

  const hsv = rgbToHsv(hexToRgb(color));

  const [hue, setHue] = useState<number>(hsv[0]);
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
    defaultValue: hue,
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

  function getBackground(hsvIndex: number) {
    const hsv = rgbToHsv(hexToRgb(color));

    const leftHSV = [...hsv] as HSV;
    leftHSV[hsvIndex] = 0;
    const left = rgbToHex(hsvToRgb(leftHSV));

    const centerHSV = [...hsv] as HSV;
    centerHSV[hsvIndex] = 50;
    const center = rgbToHex(hsvToRgb(centerHSV));

    const rightHSV = [...hsv] as HSV;
    rightHSV[hsvIndex] = 100;
    const right = rgbToHex(hsvToRgb(rightHSV));

    return `linear-gradient(to right, #${left}, #${center}, #${right})`;
  }

  useIgnoreFirstEffect(() => {
    setColor(rgbToHex(hsvToRgb([hue, saturation, value])));
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
            max={360}
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
            background={getBackground(1)}
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
            background={getBackground(2)}
          />
        </div>
      </div>
    </div>
  );
}

export default HSVSlider;
