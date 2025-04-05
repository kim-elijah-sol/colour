import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

function Portal({ children }: PropsWithChildren) {
  return createPortal(children, document.querySelector('#portal')!);
}

export default Portal;
