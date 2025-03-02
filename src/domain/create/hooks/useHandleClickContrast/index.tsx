import useModal from '@/stores/useModal';
import Modal from '@/utils/components/Modal';
import { getContrastRatio, getForegroundColorType } from '@/utils/functions';
import { CircleAlert, CircleCheck } from 'lucide-react';
import * as style from './style.css';

function ContrastItem({
  foreground,
  background,
}: {
  foreground: string;
  background: string;
}) {
  const contrastRatio = getContrastRatio(foreground, background);

  const isPass = contrastRatio >= 4.5;

  const foregroundColorType = getForegroundColorType(background);

  return (
    <li
      className={style.contrastItem}
      style={{
        background: `#${background}`,
      }}
    >
      <p style={{ color: `#${foreground}` }} className={style.contrastItemText}>
        {foreground}
      </p>

      <div className={style.contrastItemRight}>
        <p
          className={style.contrastItemText}
          style={{ color: foregroundColorType }}
        >{`${contrastRatio.toFixed(2)}:1`}</p>

        {isPass ? (
          <CircleCheck color={foregroundColorType} />
        ) : (
          <CircleAlert color={foregroundColorType} />
        )}
      </div>
    </li>
  );
}

function useHandleClickContrast(color: string) {
  const { setModal } = useModal();

  function handleClickContrast() {
    setModal(() => {
      return (
        <Modal>
          <Modal.Header right={<Modal.Header.CloseButton />}>
            Contrast Check
          </Modal.Header>
          <ul className={style.contrastList}>
            <ContrastItem foreground='FFFFFF' background={color} />
            <ContrastItem background='FFFFFF' foreground={color} />
            <ContrastItem foreground='000000' background={color} />
            <ContrastItem background='000000' foreground={color} />
          </ul>
        </Modal>
      );
    });
  }

  return handleClickContrast;
}

export default useHandleClickContrast;
