import React, { useEffect, useState } from 'react';

type Props = {
  defaultValue: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  channel: 'H' | 'S' | 'L';
};

function useHSLInput({ defaultValue, setValue, channel }: Props) {
  const [innerValue, setInnerValue] = useState(defaultValue.toString());

  const valueMax = (() => {
    if (channel === 'H') return 360;
    if (channel === 'S') return 100;
    return 100;
  })();

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInnerValue(e.target.value);
  }

  function onBlur({ target: { value } }: React.FocusEvent<HTMLInputElement>) {
    if (value.replace(/[0-9]/g, '').length > 0) {
      setValue(defaultValue);
      return;
    }

    const newValue = Math.min(Number(value), valueMax);

    setValue((newValue / valueMax) * 100);
    setInnerValue(newValue.toString());
  }

  useEffect(() => {
    setInnerValue(defaultValue.toString());
  }, [defaultValue]);

  return {
    value: innerValue,
    maxLength: 3,
    onChange,
    onBlur,
  };
}

export default useHSLInput;
