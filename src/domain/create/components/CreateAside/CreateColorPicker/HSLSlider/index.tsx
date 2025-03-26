import useIgnoreFirstEffect from '@/hooks/useIgnoreFirstEffect';
import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { HSL } from '@/types';
import { hexToRgb, hslToRgb, rgbToHex, rgbToHsl } from '@/utils/functions';
import { useState } from 'react';
import * as style from '../RGBSlider/style.css';
import Slider from '../Slider';
import useHSLInput from './useHSLInput';
import useHSLSlider from './useHSLSlider';

function HSLSlider() {
  const { colors, setColor, selectedIndex } = useCreatePaletteColors();

  const color = colors[selectedIndex];

  const hsl = rgbToHsl(hexToRgb(color));

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
    const hsl = rgbToHsl(hexToRgb(color));

    const leftHSL = [...hsl] as HSL;
    leftHSL[hslIndex] = 0;
    const left = rgbToHex(hslToRgb(leftHSL));

    const centerHSL = [...hsl] as HSL;
    centerHSL[hslIndex] = 50;
    const center = rgbToHex(hslToRgb(centerHSL));

    const rightHSL = [...hsl] as HSL;
    rightHSL[hslIndex] = 100;
    const right = rgbToHex(hslToRgb(rightHSL));

    return `linear-gradient(to right, #${left}, #${center}, #${right})`;
  }

  useIgnoreFirstEffect(() => {
    setColor(selectedIndex, rgbToHex(hslToRgb([hue, saturation, luminance])));
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
