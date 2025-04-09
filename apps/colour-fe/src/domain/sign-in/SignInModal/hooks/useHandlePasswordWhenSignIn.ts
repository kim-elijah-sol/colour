import useSignInStore from '@/stores/useSignInStore';
import { useMutation } from '@tanstack/react-query';
import { HTTPError } from 'ky';
import { postSignIn } from '../apis/postSignIn';

function useHandlePasswordWhenSignIn() {
  const { email, password } = useSignInStore();

  const { mutate } = useMutation({
    mutationKey: ['postSignIn'],
    mutationFn: postSignIn,
    onSuccess: (data) => {
      // Success Data : Tokens
      console.log(data.data);
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

  function handlePasswordWhenSignIn() {
    mutate({ email, password });
  }

  return handlePasswordWhenSignIn;
}

export default useHandlePasswordWhenSignIn;
