import toast from '@/components/Toast/toast';
import { copy } from '@/utils/functions';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import * as style from './style.css';

type Props = {
  label: string;
  value: string;
};

function ColourInfo({ label, value }: Props) {
  const [isCopied, setIsCopied] = useState(false);

  const Icon = isCopied ? Check : Copy;

  return (
    <li
      className={style.container}
      onClick={() => {
        if (isCopied) return;

        const copyValue = value.replace('#', '');

        copy(copyValue);
        setIsCopied(true);

        toast.open(`"${copyValue}" is copied!`);
      }}
      onMouseLeave={() => {
        setIsCopied(false);
      }}
    >
      <div>
        <p className={style.label}>{label}</p>
        <p className={style.value}>{value}</p>
      </div>

      <Icon size={20} className={style.rightIcon} />
    </li>
  );
}

export default ColourInfo;
