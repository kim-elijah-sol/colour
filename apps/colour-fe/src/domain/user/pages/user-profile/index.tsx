import userContentStyles from '../../styles/user-content-styles.css';
import { NicknameForm, ProfileColourForm } from './components';

function UserProfile() {
  return (
    <>
      <h2 className={userContentStyles.title}>Profile</h2>
      <p className={userContentStyles.description}>
        Show the world who you are.
        <br />
        Update your profile details to express yourself.
      </p>

      <div className={userContentStyles.sectionList}>
        <section className={userContentStyles.section}>
          <h3 className={userContentStyles.sectionTitle}>Nickname</h3>
          <NicknameForm />
        </section>
        <section className={userContentStyles.section}>
          <h3 className={userContentStyles.sectionTitle}>Profile Colour</h3>
          <ProfileColourForm />
        </section>
        <section className={userContentStyles.section}>
          <h3 className={userContentStyles.sectionTitle}>Introduce</h3>
        </section>
      </div>
    </>
  );
}

export default UserProfile;
