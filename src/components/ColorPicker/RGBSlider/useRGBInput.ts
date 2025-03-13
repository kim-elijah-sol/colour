import { useColorPickerContext } from '@/stores/createColorPickerContext';
import { RGB } from '@/types';
import { hexToRgb, rgbToHex } from '@/utils/functions';
import React, { useState } from 'react';

function useRGBInput(channel: 'R' | 'G' | 'B') {
  const { color, setColor } = useColorPickerContext();

  const rgb = hexToRgb(color);

  const rgbIndex = (() => {
    if (channel === 'R') return 0;
    if (channel === 'G') return 1;
    return 2;
  })();

  const [value, setValue] = useState(rgb[rgbIndex].toString());

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function onBlur({ target: { value } }: React.FocusEvent<HTMLInputElement>) {
    const defaultValue = rgb[rgbIndex].toString();

    if (value.replace(/[0-9]/g, '').length > 0) {
      setColor(defaultValue);
      return;
    }

    const newValue = Math.min(Number(value), 255);

    const newRGB = [...rgb] as RGB;
    newRGB[rgbIndex] = newValue;

    setColor(rgbToHex(newRGB));
  }

  return {
    value,
    maxLength: 3,
    onChange,
    onBlur,
  };
}

export default useRGBInput;
