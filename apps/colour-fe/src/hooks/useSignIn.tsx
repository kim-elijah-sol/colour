import SignInModal from '@/domain/sign-in/SignInModal/components';
import Portal from '@/utils/components/Portal';
import { useState } from 'react';

function useSignIn() {
  const [isModalShow, setIsModalShow] = useState(false);

  function open() {
    setIsModalShow(true);
  }

  const SignIn = () => {
    if (!isModalShow) return null;

    return (
      <Portal>
        <SignInModal close={() => setIsModalShow(false)} />
      </Portal>
    );
  };

  return [SignIn, open] as const;
}

export default useSignIn;
