import Loader from '@/components/Loader';
import { Send } from 'lucide-react';
import useCreatePaletteSubmit from '../../hooks/useCreatePaletteSubmit';
import * as style from './style.css';

function SubmitButton() {
  const { handleSubmit, isPending, SignInModal } = useCreatePaletteSubmit();

  return (
    <>
      <button
        type='button'
        onClick={handleSubmit}
        className={style.submitButton}
      >
        {isPending ? (
          <Loader size={20} />
        ) : (
          <>
            <Send color='#FFFFFF' size={16} /> Submit
          </>
        )}
      </button>
      <SignInModal />
    </>
  );
}

export default SubmitButton;
