import Loader from '@/components/Loader';
import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { Send } from 'lucide-react';
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
        <Loader />
      ) : (
        <>
          <Send color='#FFFFFF' size={16} /> Submit
        </>
      )}
    </button>
  );
}

export default SubmitButton;
