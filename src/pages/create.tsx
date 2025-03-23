import { CreateAside, CreateContainer } from '@/domain/create/components';
import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { randomHex } from '@/utils/functions';
import { useEffect } from 'react';

function Create() {
  const { colors, setAllColors, clearAllColors } = useCreatePaletteColors();

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
    };
  }, []);

  if (colors.length === 0) return null;

  return (
    <CreateContainer>
      <CreateAside />
    </CreateContainer>
  );
}

export default Create;
