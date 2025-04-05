import { getForegroundColorType } from '@/utils/functions';
import { useEffect, useState } from 'react';

function useForegroundColorType(color: string) {
  const [foregroundColorType, setForegroundColorType] = useState(
    getForegroundColorType(color)
  );

  useEffect(() => {
    if (color.length === 6) {
      setForegroundColorType(getForegroundColorType(color));
    }
  }, [color]);

  return foregroundColorType;
}

export default useForegroundColorType;
