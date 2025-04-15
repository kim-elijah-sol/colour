import useSlider from '../Slider/useSlider';

type Props = {
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

function useRGBSlider({ setValue }: Props) {
  const slider = useSlider(
    {
      onChange: setValue,
      max: 255,
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
