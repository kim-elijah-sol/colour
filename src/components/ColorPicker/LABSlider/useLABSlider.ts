import React from 'react';
import useSlider from '../Slider/useSlider';

type Props = {
  setValue: React.Dispatch<React.SetStateAction<number>>;
  channel: 'L' | 'A' | 'B';
};

function useLABSlider({ setValue, channel }: Props) {
  const [min, max] = (() => {
    if (channel === 'L') return [0, 100];
    return [-128, 127];
  })();

  const slider = useSlider(
    {
      onChange: (value) => {
        const _value = Math.round(Math.max(Math.min(value, 100), 0));

        setValue(Math.round(min + (_value / 100) * (Math.abs(min) + max)));
      },
    },
    []
  );

  return {
    ...slider,
    min,
    max,
  };
}

export default useLABSlider;
