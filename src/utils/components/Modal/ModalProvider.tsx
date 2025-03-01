import useModal from '@/stores/useModal';
import { PropsWithChildren } from 'react';
import Portal from '../Portal';

function ModalProvider({ children }: PropsWithChildren) {
  const { modal } = useModal();

  return (
    <>
      {children}
      <Portal>{modal?.()}</Portal>
    </>
  );
}

export default ModalProvider;
