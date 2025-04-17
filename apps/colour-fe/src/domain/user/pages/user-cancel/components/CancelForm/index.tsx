import Loader from '@/components/Loader';
import userContentStyles from '@/domain/user/styles/user-content-styles.css';
import useCancelForm from '../../hooks/useCancelForm';
import * as style from './style.css';

function CancelForm() {
  const {
    password,
    handleChangePassword,
    handleSubmit,
    isDisabled,
    isPending,
  } = useCancelForm();

  return (
    <form className={userContentStyles.form} onSubmit={handleSubmit}>
      <input
        type='password'
        placeholder='your current password'
        className={userContentStyles.input}
        value={password}
        onChange={handleChangePassword}
      />

      <button type='submit' className={style.button} disabled={isDisabled}>
        {!isPending ? 'Good Bye' : <Loader size={20} />}
      </button>
    </form>
  );
}

export default CancelForm;
