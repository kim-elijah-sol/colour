import useSignInStore from '@/stores/useSignInStore';
import useHandleEmail from './useHandleEmail';
import useIsSubmitPending from './useIsSubmitPending';
import usePasswordWhenSignIn from './usePasswordWhenSignIn';
import usePasswordWhenSignUp from './usePasswordWhenSignUp';
import useVerifyCode from './useVerifyCode';

function useSignInSubmit() {
  const { step, submitType } = useSignInStore();

  const handleEmail = useHandleEmail();

  const handlePasswordWhenSignIn = usePasswordWhenSignIn();

  const handlePasswordWhenSignUp = usePasswordWhenSignUp();

  const handleVerifyCode = useVerifyCode();

  const isSubmitPending = useIsSubmitPending();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitPending) return;

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
