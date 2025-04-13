import Loader from '@/components/Loader';
import userContentStyles from '@/domain/user/styles/user-content-styles.css';
import useNicknameForm from '../hooks/useNicknameForm';

function NicknameForm() {
  const {
    nickname,
    handleChangeNickname,
    handleSubmit,
    isDisabled,
    isPending,
  } = useNicknameForm();

  return (
    <form className={userContentStyles.form} onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='your nickname (letters, numbers, -, _)'
        className={userContentStyles.input}
        value={nickname}
        onChange={handleChangeNickname}
      />
      <button
        type='submit'
        className={userContentStyles.button}
        disabled={isDisabled}
      >
        {!isPending ? 'Save' : <Loader size={20} />}
      </button>
    </form>
  );
}

export default NicknameForm;
