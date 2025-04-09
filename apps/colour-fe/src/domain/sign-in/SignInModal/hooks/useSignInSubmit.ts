import useSignInStore from '@/stores/useSignInStore';
import useHandleEmail from './useHandleEmail';
import useHandlePasswordWhenSignIn from './useHandlePasswordWhenSignIn';
import useHandlePasswordWhenSignUp from './useHandlePasswordWhenSignUp';
import useHandleVerifyCode from './useHandleVerifyCode';
import useIsSubmitPending from './useIsSubmitPending';

function useSignInSubmit() {
  const { step, submitType } = useSignInStore();

  const handleEmail = useHandleEmail();

  const handlePasswordWhenSignIn = useHandlePasswordWhenSignIn();

  const handlePasswordWhenSignUp = useHandlePasswordWhenSignUp();

  const handleVerifyCode = useHandleVerifyCode();

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
