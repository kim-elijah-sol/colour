import {
  getHue,
  hexToRgb,
  hslToRgb,
  rgbToHex,
  rgbToHsl,
} from '@/utils/functions';
import React, { useState } from 'react';
import * as style from './style.css';
import useHueSlider from './useHueSlider';
import usePicker from './usePicker';

type Props = {
  color: string;
};

function HexPicker({ color: _color }: Props) {
  const [color, setColor] = useState(_color);

  const {
    pickerRef,
    pickerHighlightColor,
    contollerLeft,
    contollerBottom,
    ...pickerProps
  } = usePicker(color, setColor);

  const { sliderRef, sliderLeft, ...sliderProps } = useHueSlider(
    color,
    setColor
  );

  const hsl = rgbToHsl(hexToRgb(color));

  return (
    <div className={style.container}>
      <div className={style.pickerContainer}>
        <div
          ref={pickerRef}
          className={style.picker}
          style={{
            background: `linear-gradient(to right, #FFFFFF, #${pickerHighlightColor})`,
          }}
          {...pickerProps}
        >
          <div
            className={style.pickerController}
            style={{
              left: contollerLeft,
              bottom: contollerBottom,
            }}
          />
        </div>
        <div ref={sliderRef} className={style.slider} {...sliderProps}>
          <div
            style={{
              left: `${sliderLeft}%`,
            }}
            className={style.sliderController}
          />
        </div>
      </div>
    </div>
  );
}

export default HexPicker;
