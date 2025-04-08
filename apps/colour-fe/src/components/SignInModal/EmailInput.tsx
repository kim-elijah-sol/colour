import useSignInStore from '@/stores/useSignInStore';
import * as style from './style.css';

function EmailInput({ ref }: { ref: React.Ref<HTMLInputElement> }) {
  const { step, email, setEmail } = useSignInStore();

  return (
    <div className={style.inputBox}>
      <input
        ref={ref}
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={step !== 'email'}
        type='email'
        className={style.input}
        placeholder='your email'
      />
    </div>
  );
}

export default EmailInput;
