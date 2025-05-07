import toast from '@/components/Toast/toast';
import useSignIn from '@/hooks/useSignIn';
import { useAccessToken } from '@/queries/useAccessToken';
import useCreatePaletteColours from '@/stores/useCreatePaletteColours';
import { toastOnHttpsError } from '@/utils/https';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { postCreatePalette } from '../apis/postCreatePalette';

function useCreatePaletteSubmit() {
  const navigate = useNavigate();

  const colours = useCreatePaletteColours().colours;

  const [SignIn, open] = useSignIn();

  const accessToken = useAccessToken().data;

  const { mutate, isPending } = useMutation({
    mutationFn: postCreatePalette,
    mutationKey: ['postCreatePalette'],
    onSuccess: () => {
      navigate('/');
    },
    onError: toastOnHttpsError,
  });

  function handleSubmit() {
    if (isPending) return;

    const deduplicatedColour = colours.reduce<string[]>((acc, current) => {
      if (acc.includes(current)) return acc;
      return acc.concat(current);
    }, []);

    if (deduplicatedColour.length !== 4) {
      toast.open(
        'Oops!<br/>You’ve already added that colour.<br/>Each palette needs four unique colours.'
      );
      return;
    }

    if (accessToken) {
      mutate({
        colour: colours,
      });
    } else {
      open();
    }
  }

  return {
    handleSubmit,
    isPending,
    SignInModal: SignIn,
  };
}

export default useCreatePaletteSubmit;
