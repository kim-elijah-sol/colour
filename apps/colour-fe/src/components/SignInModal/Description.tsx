import * as style from './style.css';

type Props = {
  translateY: number;
};

function Description({ translateY }: Props) {
  return (
    <div className={style.descriptionWrapper}>
      <div
        className={style.rolling}
        style={{
          transform: `translateY(${translateY}px)`,
        }}
      >
        <p className={style.description}>Enter the your email!</p>
        <p className={style.description}>Enter the your password!</p>
        <p className={style.description}>Enter the password to join us!</p>
        <p className={style.description}>
          Enter the code we sent to your email!
        </p>
      </div>
    </div>
  );
}

export default Description;
