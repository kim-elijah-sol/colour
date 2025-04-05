import { enterToBlur } from '@/utils/functions';
import React, { useEffect, useState } from 'react';

type Props = {
  defaultValue: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  channel: 'L' | 'A' | 'B';
};

function useLABInput({ defaultValue, setValue, channel }: Props) {
  const [innerValue, setInnerValue] = useState(defaultValue.toString());

  const valueRange = (() => {
    if (channel === 'L') return [0, 100];
    if (channel === 'A') return [-128, 127];
    return [-127, 127];
  })();

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInnerValue(e.target.value);
  }

  function onBlur({ target: { value } }: React.FocusEvent<HTMLInputElement>) {
    if (isNaN(Number(value)) && value.includes('.')) {
      setValue(defaultValue);
      return;
    }

    const newValue = Math.max(
      Math.min(Number(value), valueRange[1]),
      valueRange[0]
    );

    setValue(newValue);
    setInnerValue(newValue.toString());
  }

  useEffect(() => {
    setInnerValue(defaultValue.toString());
  }, [defaultValue]);

  return {
    value: innerValue,
    maxLength: 4,
    onChange,
    onBlur,
    onKeyDown: enterToBlur(),
  };
}

export default useLABInput;
