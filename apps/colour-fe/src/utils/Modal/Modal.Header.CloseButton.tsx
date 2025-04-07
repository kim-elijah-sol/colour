import { X } from 'lucide-react';
import * as style from './Modal.Header.CloseButton.css';

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function ModalHeaderCloseButton({ onClick }: Props) {
  return (
    <button onClick={onClick} className={style.closeButton}>
      <X className={style.xIcon} size={24} />
    </button>
  );
}

export default ModalHeaderCloseButton;
