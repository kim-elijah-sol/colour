import React, { useEffect, useState } from 'react';

function useHexInput(
  color: string,
  setColor: React.Dispatch<React.SetStateAction<string>>
) {
  const [value, setValue] = useState(color);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    let newValue = e.currentTarget.value;

    newValue = newValue.replace(/[^0-9 | ^a-f | ^A-F]/g, '').toUpperCase();

    setValue(newValue);
  }

  useEffect(() => {
    if (value.length === 6) {
      setColor(value);
    }
  }, [value]);

  useEffect(() => {
    setValue(color);
  }, [color]);

  return {
    value,
    onChange,
    maxLength: 6,
  };
}

export default useHexInput;
