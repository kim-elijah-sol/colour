import * as style from './style.css';

type Props = {
  ref: React.Ref<HTMLDivElement | null>;
  background: string;
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  left: number;
};

function Slider({ ref, background, onMouseDown, left }: Props) {
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
          left: `${left}%`,
        }}
        className={style.sliderController}
      />
    </div>
  );
}

export default Slider;
