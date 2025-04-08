import useSignInStore from '@/stores/useSignInStore';
import * as style from './style.css';

function Description() {
  const { step, submitType } = useSignInStore();

  const translateY = (() => {
    if (step === 'email') return 0;
    if (step === 'password' && submitType === 'sign-in') return -24;
    if (step === 'password' && submitType === 'sign-up') return -48;
    return -72;
  })();

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
