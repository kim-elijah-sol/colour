import { useColorPickerContext } from '@/stores/createColorPickerContext';
import { LAB, RGB } from '@/types';
import { hexToRgb, labToRgb, rgbToHex, rgbToLab } from '@/utils/functions';
import { useState } from 'react';
import useIgnoreFirstEffect from '../../../hooks/useIgnoreFirstEffect';
import * as style from '../RGBSlider/style.css';
import Slider from '../Slider';
import useLABInput from './useLABInput';
import useLABSlider from './useLABSlider';

function LABSlider() {
  const { color, setColor } = useColorPickerContext();

  const lab = rgbToLab(hexToRgb(color)).map(Math.round);

  const [luminance, setLuminance] = useState<number>(lab[0]);
  const [greenRed, setGreenRed] = useState<number>(lab[1]);
  const [blueYellow, setBlueYellow] = useState<number>(lab[2]);

  const luminanceSlider = useLABSlider({
    setValue: setLuminance,
    channel: 'L',
  });
  const greenRedSlider = useLABSlider({
    setValue: setGreenRed,
    channel: 'A',
  });
  const blueYellowSlider = useLABSlider({
    setValue: setBlueYellow,
    channel: 'B',
  });

  const luminanceInput = useLABInput({
    defaultValue: luminance,
    setValue: setLuminance,
    channel: 'L',
  });
  const greenRedInput = useLABInput({
    defaultValue: greenRed,
    setValue: setGreenRed,
    channel: 'A',
  });
  const blueYellowInput = useLABInput({
    defaultValue: blueYellow,
    setValue: setBlueYellow,
    channel: 'B',
  });

  function getBackground(
    labIndex: number,
    valueRange: [number, number, number]
  ) {
    const lab = rgbToLab(hexToRgb(color));

    const leftLAB = [...lab] as LAB;
    leftLAB[labIndex] = valueRange[0];
    const left = rgbToHex(labToRgb(leftLAB).map(Math.round) as LAB);

    const centerLAB = [...lab] as LAB;
    centerLAB[labIndex] = valueRange[1];
    const center = rgbToHex(labToRgb(centerLAB).map(Math.round) as LAB);

    const rightLAB = [...lab] as LAB;
    rightLAB[labIndex] = valueRange[2];
    const right = rgbToHex(labToRgb(rightLAB).map(Math.round) as LAB);

    return `linear-gradient(to right, #${left}, #${center}, #${right})`;
  }

  useIgnoreFirstEffect(() => {
    setColor(
      rgbToHex(
        labToRgb([luminance, greenRed, blueYellow]).map(Math.round) as RGB
      )
    );
  }, [luminance, greenRed, blueYellow]);

  return (
    <div className={style.container}>
      <div className={style.pickerContainer}>
        <div>
          <div className={style.top}>
            <p className={style.label}>Hue</p>
            <input className={style.input} type='text' {...luminanceInput} />
          </div>

          <Slider
            ref={luminanceSlider.sliderRef}
            left={luminance}
            onMouseDown={luminanceSlider.onMouseDown}
            background={getBackground(0, [0, 50, 100])}
          />
        </div>

        <div>
          <div className={style.top}>
            <p className={style.label}>Saturation</p>
            <input className={style.input} type='text' {...greenRedInput} />
          </div>

          <Slider
            ref={greenRedSlider.sliderRef}
            left={greenRed}
            onMouseDown={greenRedSlider.onMouseDown}
            background={getBackground(1, [-128, 0, 127])}
            min={-128}
            max={127}
          />
        </div>

        <div>
          <div className={style.top}>
            <p className={style.label}>Value</p>
            <input className={style.input} type='text' {...blueYellowInput} />
          </div>

          <Slider
            ref={blueYellowSlider.sliderRef}
            left={blueYellow}
            onMouseDown={blueYellowSlider.onMouseDown}
            background={getBackground(2, [-128, 0, 127])}
            min={-128}
            max={127}
          />
        </div>
      </div>
    </div>
  );
}

export default LABSlider;
