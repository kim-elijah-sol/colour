import useModal from '@/stores/useModal';
import { X } from 'lucide-react';
import * as style from './Modal.Header.CloseButton.css';

function ModalHeaderCloseButton() {
  const { removeModal } = useModal();

  return (
    <button onClick={removeModal} className={style.closeButton}>
      <X className={style.xIcon} size={24} />
    </button>
  );
}

export default ModalHeaderCloseButton;
