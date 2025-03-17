import React from 'react';
import useSlider from '../Slider/useSlider';

type Props = {
  setValue: React.Dispatch<React.SetStateAction<number>>;
  channel: 'H' | 'S' | 'L';
};

function useHSLSlider({ setValue, channel }: Props) {
  const valueMax = (() => {
    if (channel === 'H') return 360;
    if (channel === 'S') return 100;
    return 100;
  })();

  const slider = useSlider(
    {
      onChange: (value) => {
        const _value = Math.round(Math.max(Math.min(value, 100), 0));

        setValue(Math.round(0 + (_value / 100) * (Math.abs(0) + valueMax)));
      },
    },
    []
  );

  return {
    ...slider,
  };
}

export default useHSLSlider;
