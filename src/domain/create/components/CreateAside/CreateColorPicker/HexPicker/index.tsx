import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import {
  hexToRgb,
  hslToRgb,
  hsvToRgb,
  rgbToHex,
  rgbToHsv,
} from '@/utils/functions';
import { pipe } from 'fp-ts/lib/function';
import { useState } from 'react';
import Slider from '../Slider';
import useSlider from '../Slider/useSlider';
import * as style from './style.css';
import useHexInput from './useHexInput';
import usePicker from './usePicker';

function HexPicker() {
  const { colors, setColor, selectedIndex } = useCreatePaletteColors();

  const color = colors[selectedIndex];

  const hsv = pipe(color, hexToRgb, rgbToHsv);

  const [hue, setHue] = useState(hsv[0]);
  const [saturation, setSaturation] = useState(hsv[1]);
  const [value, setValue] = useState(hsv[2]);

  function setHueForSlider(hue: number) {
    setHue(hue);
    setColor(selectedIndex, pipe([hue, saturation, value], hsvToRgb, rgbToHex));
  }

  function setSaturationForSlider(saturation: number) {
    setSaturation(saturation);
    setColor(selectedIndex, pipe([hue, saturation, value], hsvToRgb, rgbToHex));
  }

  function setValueForSlider(value: number) {
    setValue(value);
    setColor(selectedIndex, pipe([hue, saturation, value], hsvToRgb, rgbToHex));
  }

  const { pickerRef, ...pickerProps } = usePicker(
    {
      setSaturation: setSaturationForSlider,
      setValue: setValueForSlider,
    },
    [hue, saturation, value]
  );

  const { sliderRef, ...sliderProps } = useSlider(
    {
      onChange: setHueForSlider,
      max: 360,
    },
    [saturation, value]
  );

  const hexInput = useHexInput({
    defaultValue: color,
    setValue: (value) => setColor(selectedIndex, value),
    onChanged: (hex) => {
      const [hue, saturation, value] = rgbToHsv(hexToRgb(hex));
      setHue(hue);
      setSaturation(saturation);
      setValue(value);
    },
  });

  const pickerHighlightColor = pipe([hue, 100, 50], hslToRgb, rgbToHex);

  return (
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
            left: `${saturation}%`,
            bottom: `${value}%`,
          }}
        />
      </div>
      <Slider
        ref={sliderRef}
        left={hue}
        {...sliderProps}
        background='linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)'
        max={360}
      />
      <div className={style.inputBox}>
        <input type='text' className={style.input} {...hexInput} />
        <div
          style={{ background: `#${color}` }}
          className={style.previewColorBox}
        />
      </div>
    </div>
  );
}

export default HexPicker;
