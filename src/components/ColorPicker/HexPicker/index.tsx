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

function HexPicker() {
  const [color, setColor] = useState('003049');

  const pickerHighlightColor = rgbToHex(
    hslToRgb([getHue(hexToRgb(color)), 100, 50])
  );

  const { sliderRef, sliderLeft, ...sliderProps } = useHueSlider(
    color,
    setColor
  );

  return (
    <div className={style.container}>
      <div className={style.pickerContainer}>
        <div
          className={style.picker}
          style={{
            background: `linear-gradient(to right, #FFFFFF, #${pickerHighlightColor})`,
          }}
        ></div>
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
