import {
  CreateAside,
  CreateContainer,
  CreateRight,
} from '@/domain/create/components';
import useCreatePaletteColours from '@/stores/useCreatePaletteColours';
import { randomHex } from '@/utils/functions';
import { useEffect } from 'react';

function Create() {
  const { colours, setAllColours, clearAllColours, setSelectedIndex } =
    useCreatePaletteColours();

  useEffect(() => {
    if (colours.length === 0) {
      setAllColours([
        randomHex(50),
        randomHex(50),
        randomHex(50),
        randomHex(50),
      ]);
    }

    return () => {
      clearAllColours();
      setSelectedIndex(0);
    };
  }, []);

  if (colours.length === 0) return null;

  return (
    <CreateContainer>
      <CreateAside />
      <CreateRight />
    </CreateContainer>
  );
}

export default Create;
