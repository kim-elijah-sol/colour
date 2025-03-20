import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { randomHex } from '@/utils/functions';
import { useEffect } from 'react';

function useCreatePalette() {
  const { colors, setColor, setAllColors, clearAllColors } =
    useCreatePaletteColors();

  useEffect(() => {
    if (colors.length === 0) {
      setAllColors([
        randomHex(150),
        randomHex(150),
        randomHex(150),
        randomHex(150),
      ]);
    }

    return () => {
      clearAllColors();
    };
  }, []);

  return {
    colors,
    setColor,
  };
}

export default useCreatePalette;
