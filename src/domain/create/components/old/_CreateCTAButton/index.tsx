import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { LoaderPinwheel, Paintbrush } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useHandleCreate } from '../../../hooks/useHandleCreate';
import * as style from './style.css';

function CreateCTAButton() {
  const { colors } = useCreatePaletteColors();

  const navigate = useNavigate();

  const { handleCreate, isPending } = useHandleCreate({
    onSuccess: () => navigate('/'),
  });

  return (
    <button
      className={style.button}
      onClick={() =>
        handleCreate({
          colors,
        })
      }
      disabled={isPending}
    >
      {isPending ? (
        <LoaderPinwheel className={style.loader} color='#FFFFFF' size={20} />
      ) : (
        <>
          <Paintbrush color='#FFFFFF' size={20} /> Create
        </>
      )}
    </button>
  );
}

export default CreateCTAButton;
