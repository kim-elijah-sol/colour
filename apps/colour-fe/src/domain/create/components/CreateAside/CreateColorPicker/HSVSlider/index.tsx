import useIgnoreFirstEffect from '@/hooks/useIgnoreFirstEffect';
import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { hexToRgb, hsvToRgb, rgbToHex, rgbToHsv } from '@colour/fx';
import { HSV } from '@colour/types';
import { pipe } from 'fp-ts/lib/function';
import { useState } from 'react';
import useHandleChangeAsdieColor from '../../useHandleChangeAsideColor';
import * as style from '../RGBSlider/style.css';
import Slider from '../Slider';
import useHSVInput from './useHSVInput';
import useHSVSlider from './useHSVSlider';

function HSVSlider() {
  const { colors, setColor, selectedIndex } = useCreatePaletteColors();

  const color = colors[selectedIndex];

  const hsv = pipe(color, hexToRgb, rgbToHsv);

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
    const hsv = pipe(color, hexToRgb, rgbToHsv);

    const leftHSV = [...hsv] as HSV;
    leftHSV[hsvIndex] = 0;
    const left = pipe(leftHSV, hsvToRgb, rgbToHex);

    const centerHSV = [...hsv] as HSV;
    centerHSV[hsvIndex] = 50;
    const center = pipe(centerHSV, hsvToRgb, rgbToHex);

    const rightHSV = [...hsv] as HSV;
    rightHSV[hsvIndex] = 100;
    const right = pipe(rightHSV, hsvToRgb, rgbToHex);

    return `linear-gradient(to right, #${left}, #${center}, #${right})`;
  }

  useIgnoreFirstEffect(() => {
    setColor(selectedIndex, pipe([hue, saturation, value], hsvToRgb, rgbToHex));
  }, [hue, saturation, value]);

  useHandleChangeAsdieColor((color) => {
    const [h, s, v] = pipe(color, hexToRgb, rgbToHsv);

    setHue(h);
    setSaturation(s);
    setValue(v);
  });

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
