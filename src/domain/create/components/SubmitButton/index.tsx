import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { LoaderPinwheel, Send } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useHandleCreate } from '../../hooks/useHandleCreate';
import * as style from './style.css';

function SubmitButton() {
  const navigate = useNavigate();

  const colors = useCreatePaletteColors().colors;

  const { handleCreate, isPending } = useHandleCreate({
    onSuccess: () => navigate('/'),
  });

  return (
    <button
      type='button'
      onClick={() => handleCreate({ colors })}
      disabled={isPending}
      className={style.submitButton}
    >
      {isPending ? (
        <LoaderPinwheel className={style.loader} color='#FFFFFF' size={16} />
      ) : (
        <>
          <Send color='#FFFFFF' size={16} /> Submit
        </>
      )}
    </button>
  );
}

export default SubmitButton;
