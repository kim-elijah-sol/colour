import useSignInStore from '@/stores/useSignInStore';
import * as style from './style.css';

function VerifyCodeInput({ ref }: { ref: React.Ref<HTMLInputElement> }) {
  const { step, verifyCode, setVerifyCode } = useSignInStore();

  return (
    <div className={style.inputBox}>
      <input
        ref={ref}
        value={verifyCode}
        onChange={(e) => setVerifyCode(e.target.value)}
        disabled={step !== 'verify'}
        type='text'
        maxLength={6}
        className={style.input}
        placeholder='verify code (6-digit)'
      />
    </div>
  );
}

export default VerifyCodeInput;
