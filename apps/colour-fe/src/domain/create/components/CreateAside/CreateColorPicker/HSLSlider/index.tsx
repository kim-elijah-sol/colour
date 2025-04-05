import useIgnoreFirstEffect from '@/hooks/useIgnoreFirstEffect';
import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { hexToRgb, hslToRgb, rgbToHex, rgbToHsl } from '@colour/fx';
import { HSL } from '@colour/types';
import { pipe } from 'fp-ts/lib/function';
import { useState } from 'react';
import useHandleChangeAsdieColor from '../../useHandleChangeAsideColor';
import * as style from '../RGBSlider/style.css';
import Slider from '../Slider';
import useHSLInput from './useHSLInput';
import useHSLSlider from './useHSLSlider';

function HSLSlider() {
  const { colors, setColor, selectedIndex } = useCreatePaletteColors();

  const color = colors[selectedIndex];

  const hsl = pipe(color, hexToRgb, rgbToHsl);

  const [hue, setHue] = useState<number>(hsl[0]);
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
  const luminanceSlider = useHSLSlider({
    setValue: setLuminance,
    channel: 'L',
  });

  const hueInput = useHSLInput({
    defaultValue: hue,
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

  function getBackground(hslIndex: number) {
    const hsl = pipe(color, hexToRgb, rgbToHsl);

    const leftHSL = [...hsl] as HSL;
    leftHSL[hslIndex] = 0;
    const left = pipe(leftHSL, hslToRgb, rgbToHex);

    const centerHSL = [...hsl] as HSL;
    centerHSL[hslIndex] = 50;
    const center = pipe(centerHSL, hslToRgb, rgbToHex);

    const rightHSL = [...hsl] as HSL;
    rightHSL[hslIndex] = 100;
    const right = pipe(rightHSL, hslToRgb, rgbToHex);

    return `linear-gradient(to right, #${left}, #${center}, #${right})`;
  }

  useIgnoreFirstEffect(() => {
    setColor(
      selectedIndex,
      pipe([hue, saturation, luminance], hslToRgb, rgbToHex)
    );
  }, [hue, saturation, luminance]);

  useHandleChangeAsdieColor((color) => {
    const [h, s, l] = pipe(color, hexToRgb, rgbToHsl);

    setHue(h);
    setSaturation(s);
    setLuminance(l);
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
            <p className={style.label}>Luminance</p>
            <input className={style.input} type='text' {...luminanceInput} />
          </div>

          <Slider
            ref={luminanceSlider.sliderRef}
            left={luminance}
            onMouseDown={luminanceSlider.onMouseDown}
            background={getBackground(2)}
          />
        </div>
      </div>
    </div>
  );
}

export default HSLSlider;
