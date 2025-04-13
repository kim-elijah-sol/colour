import Loader from '@/components/Loader';
import useCreatePaletteColours from '@/stores/useCreatePaletteColours';
import { Send } from 'lucide-react';
import { useNavigate } from 'react-router';
import * as style from './style.css';

function SubmitButton() {
  const navigate = useNavigate();

  const colours = useCreatePaletteColours().colours;

  const isPending = false;

  return (
    <button type='button' disabled={isPending} className={style.submitButton}>
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
