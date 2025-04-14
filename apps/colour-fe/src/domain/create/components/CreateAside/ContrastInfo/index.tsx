import { getContrastRatio, getForegroundColourType } from '@/utils/functions';
import { CircleAlert, CircleCheck } from 'lucide-react';
import * as style from './style.css';

type Props = {
  foreground: string;
  background: string;
};

function ContrastInfo({ foreground, background }: Props) {
  const contrastRatio = getContrastRatio(foreground, background);

  const isPass = contrastRatio >= 4.5;

  const foregroundColourType = getForegroundColourType(background);

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
          style={{ color: foregroundColourType }}
        >{`${contrastRatio.toFixed(2)}:1`}</p>

        {isPass ? (
          <CircleCheck color={foregroundColourType} />
        ) : (
          <CircleAlert color={foregroundColourType} />
        )}
      </div>
    </li>
  );
}

export default ContrastInfo;
