import useCreatePaletteColours from '@/stores/useCreatePaletteColours';
import { hexToRgb, hslToRgb, hsvToRgb, rgbToHex, rgbToHsv } from '@colour/fx';
import { pipe } from 'fp-ts/lib/function';
import { useState } from 'react';
import useHandleChangeAsideColour from '../../useHandleChangeAsideColour';
import Slider from '../Slider';
import useSlider from '../Slider/useSlider';
import * as style from './style.css';
import useHexInput from './useHexInput';
import usePicker from './usePicker';

function HexPicker() {
  const { colours, setColour, selectedIndex } = useCreatePaletteColours();

  const colour = colours[selectedIndex];

  const hsv = pipe(colour, hexToRgb, rgbToHsv);

  const [hue, setHue] = useState(hsv[0]);
  const [saturation, setSaturation] = useState(hsv[1]);
  const [value, setValue] = useState(hsv[2]);

  function setHueForSlider(hue: number) {
    setHue(hue);
    setColour(
      selectedIndex,
      pipe([hue, saturation, value], hsvToRgb, rgbToHex)
    );
  }

  function setSaturationForSlider(saturation: number) {
    setSaturation(saturation);
    setColour(
      selectedIndex,
      pipe([hue, saturation, value], hsvToRgb, rgbToHex)
    );
  }

  function setValueForSlider(value: number) {
    setValue(value);
    setColour(
      selectedIndex,
      pipe([hue, saturation, value], hsvToRgb, rgbToHex)
    );
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
    defaultValue: colour,
    setValue: (value) => setColour(selectedIndex, value),
    onChanged: (hex) => {
      const [hue, saturation, value] = rgbToHsv(hexToRgb(hex));
      setHue(hue);
      setSaturation(saturation);
      setValue(value);
    },
  });

  const pickerHighlightColour = pipe([hue, 100, 50], hslToRgb, rgbToHex);

  useHandleChangeAsideColour((colour) => {
    const [h, s, v] = pipe(colour, hexToRgb, rgbToHsv);

    setHue(h);
    setSaturation(s);
    setValue(v);
  });

  return (
    <div className={style.pickerContainer}>
      <div
        ref={pickerRef}
        className={style.picker}
        style={{
          background: `linear-gradient(to right, #FFFFFF, #${pickerHighlightColour})`,
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
          style={{ background: `#${colour}` }}
          className={style.previewColourBox}
        />
      </div>
    </div>
  );
}

export default HexPicker;
