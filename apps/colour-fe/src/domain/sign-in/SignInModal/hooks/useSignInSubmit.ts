import useSignInStore from '@/stores/useSignInStore';
import useHandleEmail from './useHandleEmail';
import usePasswordWhenSignIn from './usePasswordWhenSignIn';
import usePasswordWhenSignUp from './usePasswordWhenSignUp';
import useVerifyCode from './useVerifyCode';

function useSignInSubmit() {
  const { step, submitType } = useSignInStore();

  const handleEmail = useHandleEmail();

  const handlePasswordWhenSignIn = usePasswordWhenSignIn();

  const handlePasswordWhenSignUp = usePasswordWhenSignUp();

  const handleVerifyCode = useVerifyCode();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (step === 'email') {
      handleEmail();
    } else if (step === 'password' && submitType === 'sign-in') {
      handlePasswordWhenSignIn();
    } else if (step === 'password' && submitType === 'sign-up') {
      handlePasswordWhenSignUp();
    } else {
      handleVerifyCode();
    }
  }

  return handleSubmit;
}

export default useSignInSubmit;
