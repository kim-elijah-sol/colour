import useSignInStore from '@/stores/useSignInStore';
import { toastOnHttpsError } from '@/utils/https';
import { useMutation } from '@tanstack/react-query';
import { postSignUpRequest } from '../apis/postSignUpRequest';

function useHandlePasswordWhenSignUp() {
  const { email, password, setVerificationId, setStep } = useSignInStore();

  const { mutate } = useMutation({
    mutationFn: postSignUpRequest,
    mutationKey: ['postSignUpRequest'],
    onSuccess: (data) => {
      setVerificationId(data.data.verificationId);
      setStep('verify');
    },
    onError: toastOnHttpsError,
  });

  function handlePasswordWhenSignUp() {
    mutate({
      email,
      password,
    });
  }

  return handlePasswordWhenSignUp;
}

export default useHandlePasswordWhenSignUp;
