import useSignInStore from '@/stores/useSignInStore';
import { useEffect, useRef } from 'react';

function useSignInInputAutoFocus() {
  const $email = useRef<HTMLInputElement | null>(null);
  const $password = useRef<HTMLInputElement | null>(null);
  const $verify = useRef<HTMLInputElement | null>(null);

  const step = useSignInStore((state) => state.step);

  useEffect(() => {
    if (step === 'email') $email.current?.focus({ preventScroll: true });
    else if (step === 'password')
      $password.current?.focus({ preventScroll: true });
    else $verify.current?.focus({ preventScroll: true });
  }, [step]);

  return { $email, $password, $verify };
}

export default useSignInInputAutoFocus;
