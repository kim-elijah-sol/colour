import { useColorPickerContext } from '@/stores/createColorPickerContext';
import { RGB } from '@/types';
import { hexToRgb, rgbToHex } from '@/utils/functions';
import useSlider from '../Slider/useSlider';

function useRGBSlider(channel: 'R' | 'G' | 'B') {
  const { color, setColor } = useColorPickerContext();

  const rgb = hexToRgb(color);

  const rgbIndex = (() => {
    if (channel === 'R') return 0;
    if (channel === 'G') return 1;
    return 2;
  })();

  const slider = useSlider(
    {
      onChange: (value) => {
        value = Math.max(Math.min(value, 99.9), 0);

        const channelValue = Math.round(value * 2.55);

        const rgb = hexToRgb(color);

        rgb[rgbIndex] = channelValue;

        const newColor = rgbToHex(rgb);

        setColor(newColor);
      },
    },
    [color]
  );

  const background = (() => {
    const leftRGB = [...rgb] as RGB;
    leftRGB[rgbIndex] = 0;
    const centerRGB = [...rgb] as RGB;
    centerRGB[rgbIndex] = 128;
    const rightRGB = [...rgb] as RGB;
    rightRGB[rgbIndex] = 255;

    return `linear-gradient(to right, #${rgbToHex(leftRGB)}, #${rgbToHex(
      centerRGB
    )}, #${rgbToHex(rightRGB)})`;
  })();

  return {
    value: rgb[rgbIndex],
    background,
    ...slider,
  };
}

export default useRGBSlider;
