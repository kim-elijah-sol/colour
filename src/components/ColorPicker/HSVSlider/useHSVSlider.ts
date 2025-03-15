import { useColorPickerContext } from '@/stores/createColorPickerContext';
import { RGB } from '@/types';
import { hexToRgb, hsvToRgb, rgbToHex, rgbToHsv } from '@/utils/functions';
import React from 'react';
import useSlider from '../Slider/useSlider';

type Props = {
  setValue: React.Dispatch<React.SetStateAction<number>>;
  channel: 'H' | 'S' | 'V';
};

function useHSVSlider({ setValue, channel }: Props) {
  const { color } = useColorPickerContext();

  const hsvIndex = (() => {
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
    const hsv = rgbToHsv(hexToRgb(color));

    const leftHSV = [...hsv] as RGB;
    leftHSV[hsvIndex] = 0;
    const left = rgbToHex(hsvToRgb(leftHSV));

    const centerHSV = [...hsv] as RGB;
    centerHSV[hsvIndex] = valueMax / 2;
    const center = rgbToHex(hsvToRgb(centerHSV));

    const rightHSV = [...hsv] as RGB;
    rightHSV[hsvIndex] = valueMax;
    const right = rgbToHex(hsvToRgb(rightHSV));

    return `linear-gradient(to right, #${left}, #${center}, #${right})`;
  })();

  return {
    background,
    ...slider,
  };
}

export default useHSVSlider;
