import Loader from '@/components/Loader';
import * as signInModalStyles from '@/domain/sign-in/SignInModal/components/style.css';
import userContentStyles from '../../../styles/user-content-styles.css';
import usePasswordForm from '../hooks/usePasswordForm';

function PasswordForm() {
  const {
    currentPassword,
    handleChangeCurrentPassword,
    newPassword,
    handleChangeNewPassword,
    validate,
    isDisabled,
    isPending,
    handleSubmit,
  } = usePasswordForm();

  const { length, letterAndNumber, specialChar } = validate;

  return (
    <form className={userContentStyles.form} onSubmit={handleSubmit}>
      <input
        type='password'
        placeholder='current password'
        className={userContentStyles.input}
        value={currentPassword}
        onChange={handleChangeCurrentPassword}
      />
      <div>
        <input
          type='password'
          placeholder='new password'
          className={userContentStyles.input}
          value={newPassword}
          onChange={handleChangeNewPassword}
        />
        <div className={signInModalStyles.passwordGuideWrapper}>
          <div className={signInModalStyles.passwordGuideItem}>
            <div
              className={
                signInModalStyles.passwordGuideCircle[
                  length ? 'pass' : 'nonePass'
                ]
              }
            />
            <p
              className={
                signInModalStyles.passwordGuideText[
                  length ? 'pass' : 'nonePass'
                ]
              }
            >
              8 ~ 16 characters
            </p>
          </div>
          <div className={signInModalStyles.passwordGuideItem}>
            <div
              className={
                signInModalStyles.passwordGuideCircle[
                  letterAndNumber ? 'pass' : 'nonePass'
                ]
              }
            />
            <p
              className={
                signInModalStyles.passwordGuideText[
                  letterAndNumber ? 'pass' : 'nonePass'
                ]
              }
            >
              letter & number
            </p>
          </div>
          <div className={signInModalStyles.passwordGuideItem}>
            <div
              className={
                signInModalStyles.passwordGuideCircle[
                  specialChar ? 'pass' : 'nonePass'
                ]
              }
            />
            <p
              className={
                signInModalStyles.passwordGuideText[
                  specialChar ? 'pass' : 'nonePass'
                ]
              }
            >
              special character
            </p>
          </div>
        </div>
      </div>
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

export default PasswordForm;
