import Loader from '@/components/Loader';
import userContentStyles from '../../../styles/user-content-styles.css';
import useEmailForm from '../hooks/useEmailForm';

function EmailForm() {
  const {
    email,
    handleChangeEmail,
    handleSubmit,
    isDisabled,
    isCodeInputShow,
    verifyCode,
    handleChangeVerifyCode,
    isPending,
  } = useEmailForm();

  return (
    <form className={userContentStyles.form} onSubmit={handleSubmit}>
      <input
        type='email'
        placeholder='your email'
        className={userContentStyles.input}
        value={email}
        disabled={isCodeInputShow}
        onChange={handleChangeEmail}
      />
      {isCodeInputShow && (
        <input
          type='text'
          placeholder='verify code (6-digit)'
          className={userContentStyles.input}
          value={verifyCode}
          onChange={handleChangeVerifyCode}
        />
      )}
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

export default EmailForm;
