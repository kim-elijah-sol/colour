import useSignInStore from '@/stores/useSignInStore';

function useInputRollingTranslateX() {
  const step = useSignInStore((state) => state.step);

  const value = step === 'email' ? 0 : step === 'password' ? -336 : -672;

  return `translateX(${value}px)`;
}

export default useInputRollingTranslateX;
