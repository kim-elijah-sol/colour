import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

function ToastPortal({ children }: PropsWithChildren) {
  return createPortal(children, document.querySelector('#toast-portal')!);
}

export default ToastPortal;
