import { ColorPickerContext } from '@/stores/createColorPickerStore';
import React, { useContext, useEffect, useState } from 'react';
import { useStore } from 'zustand';

function useHexInput(
) {
  const colorPickerStore = useContext(ColorPickerContext)

  const { color, setColor } = useStore(colorPickerStore!)

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
