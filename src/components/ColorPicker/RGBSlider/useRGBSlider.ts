import useSlider from '../Slider/useSlider';

type Props = {
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

function useRGBSlider({ setValue }: Props) {
  const slider = useSlider(
    {
      onChange: (value) => {
        const _value = Math.round(Math.max(Math.min(value, 100), 0));

        setValue(Math.round(0 + (_value / 100) * (Math.abs(0) + 255)));
      },
    },
    []
  );

  return {
    ...slider,
    min: 0,
    max: 255,
  };
}

export default useRGBSlider;
