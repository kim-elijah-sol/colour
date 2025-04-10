import Portal from '@/components/Portal';
import SignInModal from '@/domain/sign-in/SignInModal/components';
import { ModalShowContext } from '@/stores/ModalShowContext';
import useSignInStore from '@/stores/useSignInStore';
import { useState } from 'react';

function useSignIn() {
  const reset = useSignInStore((state) => state.reset);

  const [isModalShow, setIsModalShow] = useState(false);

  function open() {
    setIsModalShow(true);
  }

  function close() {
    setIsModalShow(false);
    setTimeout(() => {
      reset();
    }, 300);
  }

  const SignIn = () => {
    if (!isModalShow) return null;

    return (
      <Portal>
        <ModalShowContext
          value={{
            isShow: isModalShow,
            close,
          }}
        >
          <SignInModal />
        </ModalShowContext>
      </Portal>
    );
  };

  return [SignIn, open] as const;
}

export default useSignIn;
