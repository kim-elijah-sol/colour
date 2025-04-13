import useIgnoreFirstEffect from '@/hooks/useIgnoreFirstEffect';
import useCreatePaletteColours from '@/stores/useCreatePaletteColours';
import { hexToRgb, rgbToHex } from '@colour/fx';
import { RGB } from '@colour/types';
import { useState } from 'react';
import useHandleChangeAsideColour from '../../useHandleChangeAsideColour';
import Slider from '../Slider';
import * as style from './style.css';
import useRGBInput from './useRGBInput';
import useRGBSlider from './useRGBSlider';

function RGBSlider() {
  const { colours, setColour, selectedIndex } = useCreatePaletteColours();

  const colour = colours[selectedIndex];

  const rgb = hexToRgb(colour);

  const [red, setRed] = useState(rgb[0]);
  const [green, setGreen] = useState(rgb[1]);
  const [blue, setBlue] = useState(rgb[2]);

  const redSlider = useRGBSlider({
    setValue: setRed,
  });
  const greenSlider = useRGBSlider({
    setValue: setGreen,
  });
  const blueSlider = useRGBSlider({
    setValue: setBlue,
  });

  const redInput = useRGBInput({
    defaultValue: red,
    setValue: setRed,
  });
  const greenInput = useRGBInput({
    defaultValue: green,
    setValue: setGreen,
  });
  const blueInput = useRGBInput({
    defaultValue: blue,
    setValue: setBlue,
  });

  function getBackground(rgbIndex: number) {
    const leftRGB = [...rgb] as RGB;
    leftRGB[rgbIndex] = 0;
    const centerRGB = [...rgb] as RGB;
    centerRGB[rgbIndex] = 128;
    const rightRGB = [...rgb] as RGB;
    rightRGB[rgbIndex] = 255;

    return `linear-gradient(to right, #${rgbToHex(leftRGB)}, #${rgbToHex(
      centerRGB
    )}, #${rgbToHex(rightRGB)})`;
  }

  useIgnoreFirstEffect(() => {
    setColour(selectedIndex, rgbToHex([red, green, blue]));
  }, [red, green, blue]);

  useHandleChangeAsideColour((colour) => {
    const [r, g, b] = hexToRgb(colour);

    setRed(r);
    setGreen(g);
    setBlue(b);
  });

  return (
    <div className={style.container}>
      <div className={style.pickerContainer}>
        <div>
          <div className={style.top}>
            <p className={style.label}>Red</p>
            <input className={style.input} type='text' {...redInput} />
          </div>
          <Slider
            ref={redSlider.sliderRef}
            left={red}
            onMouseDown={redSlider.onMouseDown}
            background={getBackground(0)}
            min={redSlider.min}
            max={redSlider.max}
          />
        </div>

        <div>
          <div className={style.top}>
            <p className={style.label}>Green</p>
            <input className={style.input} type='text' {...greenInput} />
          </div>

          <Slider
            ref={greenSlider.sliderRef}
            left={green}
            onMouseDown={greenSlider.onMouseDown}
            background={getBackground(1)}
            min={greenSlider.min}
            max={greenSlider.max}
          />
        </div>

        <div>
          <div className={style.top}>
            <p className={style.label}>Blue</p>
            <input className={style.input} type='text' {...blueInput} />
          </div>
          <Slider
            ref={blueSlider.sliderRef}
            left={blue}
            onMouseDown={blueSlider.onMouseDown}
            background={getBackground(2)}
            min={blueSlider.min}
            max={blueSlider.max}
          />
        </div>
      </div>
    </div>
  );
}

export default RGBSlider;
