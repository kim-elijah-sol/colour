import { useColorPickerContext } from '@/stores/createColorPickerContext';
import { CMYK } from '@/types';
import { cmykToRgb, hexToRgb, rgbToCmyk, rgbToHex } from '@/utils/functions';
import { useEffect, useState } from 'react';
import * as style from '../RGBSlider/style.css';
import Slider from '../Slider';
import useSlider from '../Slider/useSlider';
import useCMYKInput from './useCMYKInput';

function CMYKSlider() {
  const { color, setColor } = useColorPickerContext();

  const cmyk = rgbToCmyk(hexToRgb(color));

  const [cyan, setCyan] = useState(cmyk[0]);
  const [magenta, setMagenta] = useState(cmyk[1]);
  const [yellow, setYellow] = useState(cmyk[2]);
  const [key, setKey] = useState(cmyk[3]);

  const cyanSlider = useSlider(
    {
      onChange: setCyan,
    },
    []
  );
  const magentaSlider = useSlider(
    {
      onChange: setMagenta,
    },
    []
  );
  const yellowSlider = useSlider(
    {
      onChange: setYellow,
    },
    []
  );
  const keySlider = useSlider(
    {
      onChange: setKey,
    },
    []
  );

  const cyanInput = useCMYKInput(cyan, setCyan);
  const magentaInput = useCMYKInput(magenta, setMagenta);
  const yellowInput = useCMYKInput(yellow, setYellow);
  const keyInput = useCMYKInput(key, setKey);

  function getBackground(changeIndex: number) {
    const cmyk = [cyan, magenta, yellow, key];

    const leftCMYK = [...cmyk] as CMYK;
    leftCMYK[changeIndex] = 0;
    const left = rgbToHex(cmykToRgb(leftCMYK));

    const centerCMYK = [...cmyk] as CMYK;
    centerCMYK[changeIndex] = 50;
    const center = rgbToHex(cmykToRgb(centerCMYK));

    const rightCMYK = [...cmyk] as CMYK;
    rightCMYK[changeIndex] = 100;
    const right = rgbToHex(cmykToRgb(rightCMYK));

    return `linear-gradient(to right, #${left}, #${center}, #${right})`;
  }

  useEffect(() => {
    setColor(rgbToHex(cmykToRgb([cyan, magenta, yellow, key])));
  }, [cyan, magenta, yellow, key]);

  return (
    <div className={style.container}>
      <div className={style.pickerContainer}>
        <div>
          <div className={style.top}>
            <p className={style.label}>Cyan</p>
            <input className={style.input} type='text' {...cyanInput} />
          </div>

          <Slider
            ref={cyanSlider.sliderRef}
            left={cyan}
            onMouseDown={cyanSlider.onMouseDown}
            background={getBackground(0)}
          />
        </div>

        <div>
          <div className={style.top}>
            <p className={style.label}>Magenta</p>
            <input className={style.input} type='text' {...magentaInput} />
          </div>

          <Slider
            ref={magentaSlider.sliderRef}
            left={magenta}
            onMouseDown={magentaSlider.onMouseDown}
            background={getBackground(1)}
          />
        </div>

        <div>
          <div className={style.top}>
            <p className={style.label}>Yellow</p>
            <input className={style.input} type='text' {...yellowInput} />
          </div>

          <Slider
            ref={yellowSlider.sliderRef}
            left={yellow}
            onMouseDown={yellowSlider.onMouseDown}
            background={getBackground(2)}
          />
        </div>

        <div>
          <div className={style.top}>
            <p className={style.label}>Key</p>
            <input className={style.input} type='text' {...keyInput} />
          </div>

          <Slider
            ref={keySlider.sliderRef}
            left={key}
            onMouseDown={keySlider.onMouseDown}
            background={getBackground(3)}
          />
        </div>
      </div>
    </div>
  );
}

export default CMYKSlider;
