import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { useEffect } from 'react';

function useCreatePalette() {
  const { colors, setColor, setAllColors, clearAllColors } =
    useCreatePaletteColors();

  useEffect(() => {
    if (colors.length === 0) {
      setAllColors(['003049', 'D62828', 'F77F00', 'FCBF49']);
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
