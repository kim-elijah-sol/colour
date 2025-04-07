import * as style from './style.css';

type Props = {
  translateY: number;
};

function Title({ translateY }: Props) {
  return (
    <div className={style.titleWrapper}>
      <div
        className={style.rolling}
        style={{
          transform: `translateY(${translateY}px)`,
        }}
      >
        <p className={style.title}>Sign In</p>
        <p className={style.title}>Sign Up</p>
      </div>
    </div>
  );
}

export default Title;
