import {
  CreateAside,
  CreateContainer,
  CreateRight,
} from '@/domain/create/components';
import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { randomHex } from '@/utils/functions';
import { useEffect } from 'react';

function Create() {
  const { colors, setAllColors, clearAllColors, setSelectedIndex } =
    useCreatePaletteColors();

  useEffect(() => {
    if (colors.length === 0) {
      setAllColors([
        randomHex(50),
        randomHex(50),
        randomHex(50),
        randomHex(50),
      ]);
    }

    return () => {
      clearAllColors();
      setSelectedIndex(0);
    };
  }, []);

  if (colors.length === 0) return null;

  return (
    <CreateContainer>
      <CreateAside />
      <CreateRight />
    </CreateContainer>
  );
}

export default Create;
