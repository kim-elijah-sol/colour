import { useModalShowContext } from '@/stores/ModalShowContext';
import useSignInStore from '@/stores/useSignInStore';
import { useMutation } from '@tanstack/react-query';
import { HTTPError } from 'ky';
import { postVerify } from '../apis/postVerify';

function useVerifyCode() {
  const { close } = useModalShowContext();

  const { verificationId, verifyCode } = useSignInStore();

  const { mutate } = useMutation({
    mutationFn: postVerify,
    mutationKey: ['postVerify'],
    onSuccess: () => {
      close();
    },
    onError: async (error) => {
      if (error instanceof HTTPError) {
        const { message } = await error.response.json();

        // Nest JS Error
        console.log(message);
      } else {
        // Unexception Error
        console.log(error);
      }
    },
  });

  function handleVerifyCode() {
    mutate({
      id: verificationId!,
      code: verifyCode,
    });
  }

  return handleVerifyCode;
}

export default useVerifyCode;
