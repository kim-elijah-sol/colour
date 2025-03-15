import React, { useEffect, useState } from 'react';

type Props = {
  defaultValue: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

function useCMYKInput(
  defaultValue: number,
  setValue: React.Dispatch<React.SetStateAction<number>>
) {
  const [innerValue, setInnerValue] = useState(defaultValue.toString());

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInnerValue(e.target.value);
  }

  function onBlur({ target: { value } }: React.FocusEvent<HTMLInputElement>) {
    if (value.replace(/[0-9]/g, '').length > 0) {
      setValue(defaultValue);
      return;
    }

    const newValue = Math.min(Number(value), 100);

    setValue(newValue);
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

export default useCMYKInput;
