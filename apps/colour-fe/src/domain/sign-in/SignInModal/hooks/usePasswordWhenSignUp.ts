import useSignInStore from '@/stores/useSignInStore';
import { useMutation } from '@tanstack/react-query';
import { postSignUpRequest } from '../apis/postSignUpRequest';

function usePasswordWhenSignUp() {
  const { email, password, setVerificationId, setStep } = useSignInStore();

  const { mutate } = useMutation({
    mutationFn: postSignUpRequest,
    mutationKey: ['postSignUpRequest'],
    onSuccess: (data) => {
      setVerificationId(data.data.verificationId);
      setStep('verify');
    },
  });

  function handlePasswordWhenSignUp() {
    mutate({
      email,
      password,
    });
  }

  return handlePasswordWhenSignUp;
}

export default usePasswordWhenSignUp;
