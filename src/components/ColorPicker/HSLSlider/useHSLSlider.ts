import { useColorPickerContext } from '@/stores/createColorPickerContext';
import { RGB } from '@/types';
import { hexToRgb, hslToRgb, rgbToHex, rgbToHsl } from '@/utils/functions';
import React from 'react';
import useSlider from '../Slider/useSlider';

type Props = {
  setValue: React.Dispatch<React.SetStateAction<number>>;
  channel: 'H' | 'S' | 'L';
};

function useHSLSlider({ setValue, channel }: Props) {
  const { color } = useColorPickerContext();

  const hslIndex = (() => {
    if (channel === 'H') return 0;
    if (channel === 'S') return 1;
    return 2;
  })();

  const valueMax = (() => {
    if (channel === 'H') return 360;
    if (channel === 'S') return 100;
    return 100;
  })();

  const slider = useSlider(
    {
      onChange: (value) => {
        setValue(Math.round(Math.max(Math.min(value, 100), 0)));
      },
    },
    []
  );

  const background = (() => {
    const hsl = rgbToHsl(hexToRgb(color));

    const leftHSL = [...hsl] as RGB;
    leftHSL[hslIndex] = 0;
    const left = rgbToHex(hslToRgb(leftHSL));

    const centerHSL = [...hsl] as RGB;
    centerHSL[hslIndex] = valueMax / 2;
    const center = rgbToHex(hslToRgb(centerHSL));

    const rightHSL = [...hsl] as RGB;
    rightHSL[hslIndex] = valueMax;
    const right = rgbToHex(hslToRgb(rightHSL));

    return `linear-gradient(to right, #${left}, #${center}, #${right})`;
  })();

  return {
    background,
    ...slider,
  };
}

export default useHSLSlider;
