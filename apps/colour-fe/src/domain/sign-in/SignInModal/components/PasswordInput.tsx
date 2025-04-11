import usePasswordValidator from '@/hooks/usePasswordValidator';
import useSignInStore from '@/stores/useSignInStore';
import * as style from './style.css';

function PasswordInput({ ref }: { ref: React.Ref<HTMLInputElement> }) {
  const { step, submitType, password, setPassword } = useSignInStore();

  const { length, letterAndNumber, specialChar } =
    usePasswordValidator(password);

  return (
    <div className={style.inputBox}>
      <input
        ref={ref}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={step !== 'password'}
        type='password'
        maxLength={20}
        className={style.input}
        placeholder='your password'
      />
      {submitType === 'sign-up' && (
        <div className={style.passwordGuideWrapper}>
          <div className={style.passwordGuideItem}>
            <div
              className={
                style.passwordGuideCircle[length ? 'pass' : 'nonePass']
              }
            />
            <p
              className={style.passwordGuideText[length ? 'pass' : 'nonePass']}
            >
              8 ~ 16 characters
            </p>
          </div>
          <div className={style.passwordGuideItem}>
            <div
              className={
                style.passwordGuideCircle[letterAndNumber ? 'pass' : 'nonePass']
              }
            />
            <p
              className={
                style.passwordGuideText[letterAndNumber ? 'pass' : 'nonePass']
              }
            >
              letter & number
            </p>
          </div>
          <div className={style.passwordGuideItem}>
            <div
              className={
                style.passwordGuideCircle[specialChar ? 'pass' : 'nonePass']
              }
            />
            <p
              className={
                style.passwordGuideText[specialChar ? 'pass' : 'nonePass']
              }
            >
              special character
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PasswordInput;
