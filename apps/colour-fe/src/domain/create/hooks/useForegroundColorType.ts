import { getForegroundColourType } from '@/utils/functions';
import { useEffect, useState } from 'react';

function useForegroundColorType(color: string) {
  const [foregroundColorType, setForegroundColorType] = useState(
    getForegroundColourType(color)
  );

  useEffect(() => {
    if (color.length === 6) {
      setForegroundColorType(getForegroundColourType(color));
    }
  }, [color]);

  return foregroundColorType;
}

export default useForegroundColorType;
