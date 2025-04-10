import useSignInStore from '@/stores/useSignInStore';
import { toastOnHttpsError } from '@/utils/https';
import { useMutation } from '@tanstack/react-query';
import { getCheckEmail } from '../apis/getCheckEmail';

function useHandleEmail() {
  const { email, setStep, setSubmitType } = useSignInStore();

  const { mutate } = useMutation({
    mutationFn: getCheckEmail,
    mutationKey: ['getCheckEmail'],
    onSuccess: (data) => {
      setStep('password');
      if (data.data.isAlready === false) {
        setSubmitType('sign-up');
      }
    },
    onError: toastOnHttpsError,
  });

  async function handleEmail() {
    mutate(email);
  }

  return handleEmail;
}

export default useHandleEmail;
