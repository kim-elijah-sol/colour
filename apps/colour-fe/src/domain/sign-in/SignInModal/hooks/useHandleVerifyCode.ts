import useSignInStore from '@/stores/useSignInStore';
import { toastOnHttpsError } from '@/utils/https';
import { useMutation } from '@tanstack/react-query';
import { postVerify } from '../apis/postVerify';

function useHandleVerifyCode() {
  const {
    verificationId,
    verifyCode,
    setStep,
    setSubmitType,
    setPassword,
    setVerificationId,
    setVerifyCode,
  } = useSignInStore();

  const { mutate } = useMutation({
    mutationFn: postVerify,
    mutationKey: ['postVerify'],
    onSuccess: () => {
      setStep('password');
      setSubmitType('sign-in');
      setPassword('');
      setVerificationId(null);
      setVerifyCode('');
    },
    onError: toastOnHttpsError,
  });

  function handleVerifyCode() {
    mutate({
      id: verificationId!,
      code: verifyCode,
    });
  }

  return handleVerifyCode;
}

export default useHandleVerifyCode;
