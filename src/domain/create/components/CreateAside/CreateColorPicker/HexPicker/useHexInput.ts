import { enterToBlur } from '@/utils/functions';
import React, { useEffect, useState } from 'react';

type Props = {
  defaultValue: string;
  setValue: (value: string) => void;
  onChanged: (value: string) => void;
};

function useHexInput({ defaultValue, setValue, onChanged }: Props) {
  const [innerValue, setInnerValue] = useState(defaultValue);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInnerValue(e.target.value);
  }

  function onBlur(e: React.FocusEvent<HTMLInputElement>) {
    let newValue = e.target.value;

    newValue = newValue.replace(/[^0-9 | ^a-f | ^A-F]/g, '').toUpperCase();

    if (newValue.length !== 6) {
      setInnerValue(defaultValue);
      return;
    }

    setValue(newValue);
    setInnerValue(newValue);
    onChanged(newValue);
  }

  useEffect(() => {
    setInnerValue(defaultValue);
  }, [defaultValue]);

  return {
    value: innerValue,
    onBlur,
    onChange,
    maxLength: 6,
    onKeyDown: enterToBlur(),
  };
}

export default useHexInput;
