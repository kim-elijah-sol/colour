import useSignIn from '@/hooks/useSignIn';
import * as style from './style.css';

function SignInButton() {
  const [SignIn, open] = useSignIn();

  return (
    <>
      <button className={style.button} onClick={open}>
        Sign In
      </button>
      <SignIn />
    </>
  );
}

export default SignInButton;
