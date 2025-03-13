import { useColorPickerContext } from '@/stores/createColorPickerContext';
import { RGB } from '@/types';
import { hexToRgb, hslToRgb, rgbToHex, rgbToHsl } from '@/utils/functions';
import React, { useEffect, useState } from 'react';

function useHSLInput(channel: 'H' | 'S' | 'L') {
  const { color, setColor } = useColorPickerContext();

  const hsl = rgbToHsl(hexToRgb(color));

  const hslIndex = (() => {
    if (channel === 'H') return 0;
    if (channel === 'S') return 1;
    return 2;
  })();

  const valueMax = (() => {
    if (channel === 'H') return 360;
    if (channel === 'S') return 100;
    return 100;
  })();

  const [value, setValue] = useState(hsl[hslIndex].toString());

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function onBlur({ target: { value } }: React.FocusEvent<HTMLInputElement>) {
    const defaultValue = hsl[hslIndex].toString();

    if (value.replace(/[0-9]/g, '').length > 0) {
      setColor(defaultValue);
      return;
    }

    const newValue = Math.min(Number(value), valueMax);

    const newHSL = [...hsl] as RGB;
    newHSL[hslIndex] = newValue;

    setColor(rgbToHex(hslToRgb(newHSL)));
  }

  useEffect(() => {
    setValue(hsl[hslIndex].toString());
  }, [color]);

  return {
    value,
    maxLength: 3,
    onChange,
    onBlur,
  };
}

export default useHSLInput;
