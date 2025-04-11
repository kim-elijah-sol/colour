import userContentStyles from '../../styles/user-content-styles.css';
import EmailForm from './components/EmailForm';
import PasswordForm from './components/PasswordForm';

function UserAccount() {
  return (
    <>
      <h2 className={userContentStyles.title}>Account</h2>
      <p className={userContentStyles.description}>
        Keep your account up to date.
        <br />
        Change your email or password whenever you need.
      </p>

      <div className={userContentStyles.sectionList}>
        <section className={userContentStyles.section}>
          <h3 className={userContentStyles.sectionTitle}>Email</h3>
          <EmailForm />
        </section>
        <section className={userContentStyles.section}>
          <h3 className={userContentStyles.sectionTitle}>Password</h3>
          <PasswordForm />
        </section>
      </div>
    </>
  );
}

export default UserAccount;
