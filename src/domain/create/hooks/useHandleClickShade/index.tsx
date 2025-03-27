import useModal from '@/stores/useModal';
import Modal from '@/utils/components/Modal';
import { getForegroundColorType, getShades } from '@/utils/functions';
import { Check } from 'lucide-react';

import * as style from './style.css';

function ShadeItem({
  color,
  isCurrent,
  onClick,
}: {
  color: string;
  isCurrent: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) {
  const foregroundColorType = getForegroundColorType(color);

  return (
    <div
      className={style.shadeItem}
      style={{
        background: `#${color}`,
      }}
    >
      <div
        className={
          foregroundColorType === 'white'
            ? style.whiteShadeInner
            : style.shadeInner
        }
        onClick={onClick}
      >
        <p
          className={style.shadeItemText}
          style={{ color: foregroundColorType }}
        >
          {color}
        </p>
        {isCurrent && (
          <Check color={foregroundColorType} size={16} strokeWidth={3} />
        )}
      </div>
    </div>
  );
}

function useHandleChangeAsdieColor(
  color: string,
  onChangeColor: (color: string) => void
) {
  const { setModal, removeModal } = useModal();

  function handleClickShade() {
    const colors = getShades(color);

    setModal(() => {
      return (
        <Modal>
          <Modal.Header right={<Modal.Header.CloseButton />}>
            Shades
          </Modal.Header>
          <div>
            {colors.map((it) => (
              <ShadeItem
                onClick={() => {
                  if (it === color) return;
                  onChangeColor(it);
                  removeModal();
                }}
                isCurrent={it === color}
                color={it}
                key={it}
              />
            ))}
          </div>
        </Modal>
      );
    });
  }

  return handleClickShade;
}

export default useHandleChangeAsdieColor;
