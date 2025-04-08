import useSignInStore from '@/stores/useSignInStore';

function useInputRollingHeight() {
  const { step, submitType } = useSignInStore();

  return step === 'password' && submitType === 'sign-up' ? 92 : 46;
}

export default useInputRollingHeight;
