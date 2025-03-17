import useModal from '@/stores/useModal';
import { ForegroundColorType } from '@/types';
import Modal from '@/utils/components/Modal';
import {
  copy,
  getForegroundColorType,
  hexToRgb,
  rgbToCmyk,
  rgbToHsl,
  rgbToHsv,
  rgbToLab,
} from '@/utils/functions';
import { Copy } from 'lucide-react';

import * as style from './style.css';

function InfoItem({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: ForegroundColorType;
}) {
  const textColor = color === 'white' ? '#FFFFFF' : '#333333';

  return (
    <li
      className={color === 'white' ? style.whiteInfoItem : style.infoItem}
      onClick={() => copy(value)}
    >
      <div className={style.infoItemInner}>
        <div>
          <p className={style.infoItemTitle} style={{ color: textColor }}>
            {title}
          </p>
          <span className={style.infoItemValue} style={{ color: textColor }}>
            {value}
          </span>
        </div>

        <Copy className={style.copyIcon} size={20} color={textColor} />
      </div>
    </li>
  );
}

function useHandleClickInfo(color: string) {
  const { setModal } = useModal();

  const ForegroundColorType = getForegroundColorType(color);

  function handleClickInfo() {
    setModal(() => {
      return (
        <Modal>
          <Modal.Header right={<Modal.Header.CloseButton />}>
            Color Info
          </Modal.Header>
          <ul className={style.infoList} style={{ background: `#${color}` }}>
            <InfoItem title='HEX' value={color} color={ForegroundColorType} />
            <InfoItem
              title='RGB'
              value={hexToRgb(color).join(', ')}
              color={ForegroundColorType}
            />
            <InfoItem
              title='HSL'
              value={rgbToHsl(hexToRgb(color)).join(', ')}
              color={ForegroundColorType}
            />
            <InfoItem
              title='HSV'
              value={rgbToHsv(hexToRgb(color)).join(', ')}
              color={ForegroundColorType}
            />
            <InfoItem
              title='CMYK'
              value={rgbToCmyk(hexToRgb(color)).join(', ')}
              color={ForegroundColorType}
            />
            <InfoItem
              title='LAB'
              value={rgbToLab(hexToRgb(color)).map(Math.round).join(', ')}
              color={ForegroundColorType}
            />
          </ul>
        </Modal>
      );
    });
  }

  return handleClickInfo;
}

export default useHandleClickInfo;
