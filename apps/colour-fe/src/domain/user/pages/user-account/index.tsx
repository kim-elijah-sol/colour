import userContentStyles from '../../styles/user-content-styles.css';

function UserAccount() {
  return (
    <>
      <h2 className={userContentStyles.title}>Account</h2>
      <p className={userContentStyles.description}>
        Keep your account up to date.
        <br />
        Change your email or password whenever you need.
      </p>
    </>
  );
}

export default UserAccount;
