import useSignInStore from '@/stores/useSignInStore';

function useSignInSubmit() {
  const { step, submitType, setStep, setSubmitType } = useSignInStore();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (step === 'email') {
      setStep('password');
      setSubmitType('sign-up');
    } else if (step === 'password') {
      if (submitType === 'sign-in') {
        close();
      } else {
        setStep('verify');
      }
    }
  }

  return handleSubmit;
}

export default useSignInSubmit;
