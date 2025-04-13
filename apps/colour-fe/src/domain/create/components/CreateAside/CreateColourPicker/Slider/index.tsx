import * as style from './style.css';

type Props = {
  ref: React.Ref<HTMLDivElement | null>;
  background: string;
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  left: number;
  min?: number;
  max?: number;
};

function Slider({
  ref,
  background,
  onMouseDown,
  left,
  min = 0,
  max = 100,
}: Props) {
  return (
    <div
      ref={ref}
      className={style.slider}
      style={{
        background,
      }}
      onMouseDown={onMouseDown}
    >
      <div
        style={{
          left: `${((left - min) / (Math.abs(min) + max)) * 100}%`,
        }}
        className={style.sliderController}
      />
    </div>
  );
}

export default Slider;
