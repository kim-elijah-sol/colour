import { useColorPickerContext } from '@/stores/createColorPickerContext';
import React, { useEffect, useState } from 'react';

function useHexInput() {
  const { color, setColor } = useColorPickerContext();

  const [value, setValue] = useState(color);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    let newValue = e.currentTarget.value;

    newValue = newValue.replace(/[^0-9 | ^a-f | ^A-F]/g, '').toUpperCase();

    setValue(newValue);
  }

  useEffect(() => {
    if (value.length === 6 && color !== value) {
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
