import { PropsWithChildren } from 'react';
import * as style from './Modal.css';
import ModalHeader from './Modal.Header';

function Modal({ children }: PropsWithChildren) {
  return (
    <div className={style.background}>
      <div className={style.foreground}>{children}</div>
    </div>
  );
}

Modal.Header = ModalHeader;

export default Modal;
