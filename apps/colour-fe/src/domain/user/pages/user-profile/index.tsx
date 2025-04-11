import userContentStyles from '../../styles/user-content-styles.css';

function UserProfile() {
  return (
    <>
      <h2 className={userContentStyles.title}>Profile</h2>
      <p className={userContentStyles.description}>
        Show the world who you are.
        <br />
        Update your profile details to express yourself.
      </p>
    </>
  );
}

export default UserProfile;
