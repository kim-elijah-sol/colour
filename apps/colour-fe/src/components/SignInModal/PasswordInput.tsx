import useSignInStore from '@/stores/useSignInStore';
import * as style from './style.css';

function PasswordInput({ ref }: { ref: React.Ref<HTMLInputElement> }) {
  const { step } = useSignInStore();

  return (
    <div className={style.inputBox}>
      <input
        ref={ref}
        disabled={step !== 'password'}
        type='password'
        maxLength={20}
        className={style.input}
        placeholder='your password'
      />
      <div className={style.passwordGuideWrapper}>
        <div className={style.passwordGuideItem}>
          <div className={style.passwordGuideCircle['pass']} />
          <p className={style.passwordGuideText['pass']}>8 ~ 16 characters</p>
        </div>
        <div className={style.passwordGuideItem}>
          <div className={style.passwordGuideCircle['nonePass']} />
          <p className={style.passwordGuideText['nonePass']}>letter & number</p>
        </div>
        <div className={style.passwordGuideItem}>
          <div className={style.passwordGuideCircle['nonePass']} />
          <p className={style.passwordGuideText['nonePass']}>
            special character
          </p>
        </div>
      </div>
    </div>
  );
}

export default PasswordInput;
