import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

function Portal({
  children,
  id = 'portal',
}: PropsWithChildren<{ id?: string }>) {
  return createPortal(children, document.querySelector(`#${id}`)!);
}

export default Portal;
