import useSignInStore from '@/stores/useSignInStore';

function useInputRollingHeight() {
  const step = useSignInStore((state) => state.step);

  return step === 'password' ? 92 : 46;
}

export default useInputRollingHeight;
