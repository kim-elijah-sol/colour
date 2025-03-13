import { useColorPickerContext } from '@/stores/createColorPickerContext';
import {
  getHue,
  hexToRgb,
  hsvToRgb,
  rgbToHex,
  rgbToHsv,
} from '@/utils/functions';
import useSlider from '../Slider/useSlider';

function useHueSlider() {
  const { color, setColor } = useColorPickerContext();

  const slider = useSlider(
    {
      onChange: (position) => {
        position = Math.max(Math.min(position, 99.9), 0);

        const hue = Math.round(position * 3.6);

        const currentHsv = rgbToHsv(hexToRgb(color));

        const newColor = rgbToHex(
          hsvToRgb([hue, currentHsv[1], currentHsv[2]])
        );

        setColor(newColor);
      },
    },
    [color]
  );

  const sliderLeft = (getHue(hexToRgb(color)) / 360) * 100;

  return {
    sliderLeft,
    ...slider,
  };
}

export default useHueSlider;
