import { useModalShowContext } from '@/stores/ModalShowContext';
import useSignInStore from '@/stores/useSignInStore';
import { toastOnHttpsError } from '@/utils/https';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postSignIn } from '../apis/postSignIn';

function useHandlePasswordWhenSignIn() {
  const queryClient = useQueryClient();

  const { close } = useModalShowContext();

  const { email, password } = useSignInStore();

  const { mutate } = useMutation({
    mutationKey: ['postSignIn'],
    mutationFn: postSignIn,
    onSuccess: (data) => {
      close();

      localStorage.setItem('colour-access-token', data.data.accessToken);
      localStorage.setItem('colour-refresh-token', data.data.refreshToken);

      queryClient.invalidateQueries();
    },
    onError: toastOnHttpsError,
  });

  function handlePasswordWhenSignIn() {
    mutate({ email, password });
  }

  return handlePasswordWhenSignIn;
}

export default useHandlePasswordWhenSignIn;
