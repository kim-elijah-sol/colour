import { createContext, useContext } from 'react';

export const ModalShowContext = createContext<{
  isShow: boolean;
  close: () => void;
}>({
  isShow: false,
  close: () => {},
});

export function useModalShowContext() {
  const modalShowContext = useContext(ModalShowContext);

  return modalShowContext;
}
