import {
  CreateAside,
  CreateContainer,
  CreateRight,
} from '@/domain/create/components';
import useCreatePaletteColours from '@/stores/useCreatePaletteColours';
import { randomHex } from '@/utils/functions';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

function Create() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const { colours, setAllColours, clearAllColours, setSelectedIndex } =
    useCreatePaletteColours();

  useEffect(() => {
    const c = searchParams
      .get('c')
      ?.replace(/[^0-9 | ^a-f | ^A-F | ^,]/g, '')
      .toUpperCase();

    if (c?.length === 27) {
      setAllColours(c.split(','));
      navigate('/create', { replace: true });
    } else if (colours.length === 0) {
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
