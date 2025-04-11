import userContentStyles from '../../styles/user-content-styles.css';

function UserCancelAccount() {
  return (
    <>
      <h2 className={userContentStyles.title}>Cancel Account</h2>
      <p className={userContentStyles.description}>
        We're sad to see you go.
        <br />
        Deleting your account is permanent, so please be certain.
      </p>
    </>
  );
}

export default UserCancelAccount;
