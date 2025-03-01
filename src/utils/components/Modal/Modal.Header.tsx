import { PropsWithChildren } from 'react';
import ModalHeaderCloseButton from './Modal.Header.CloseButton';
import * as style from './Modal.Header.css';

type Props = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

function ModalHeader({ left, children, right }: PropsWithChildren<Props>) {
  return (
    <div className={style.header}>
      {left ?? <div />}
      <p className={style.title}>{children}</p>
      {right ?? <div />}
    </div>
  );
}

ModalHeader.CloseButton = ModalHeaderCloseButton;

export default ModalHeader;
