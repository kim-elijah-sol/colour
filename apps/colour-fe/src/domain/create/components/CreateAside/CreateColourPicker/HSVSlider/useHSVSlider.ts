import React from 'react';
import useSlider from '../Slider/useSlider';

type Props = {
  setValue: React.Dispatch<React.SetStateAction<number>>;
  channel: 'H' | 'S' | 'V';
};

function useHSVSlider({ setValue, channel }: Props) {
  const valueMax = (() => {
    if (channel === 'H') return 360;
    if (channel === 'S') return 100;
    return 100;
  })();

  const slider = useSlider(
    {
      onChange: setValue,
      max: valueMax,
    },
    []
  );

  return {
    ...slider,
  };
}

export default useHSVSlider;
