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
  } = useEmailForm();

  return (
    <form className={userContentStyles.form} onSubmit={handleSubmit}>
      <input
        type='email'
        placeholder='your email'
        className={userContentStyles.input}
        value={email}
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
        Save
      </button>
    </form>
  );
}

export default EmailForm;
