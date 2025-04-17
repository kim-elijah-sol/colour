import userContentStyles from '../../styles/user-content-styles.css';
import { CancelForm } from './components';

function UserCancelAccount() {
  return (
    <>
      <h2 className={userContentStyles.title}>Cancel Account</h2>
      <p className={userContentStyles.description}>
        We're sad to see you go.
        <br />
        Deleting your account is permanent, so please be certain.
      </p>

      <div className={userContentStyles.sectionList}>
        <section className={userContentStyles.section}>
          <h3 className={userContentStyles.sectionTitle}>Good Bye</h3>
          <CancelForm />
        </section>
      </div>
    </>
  );
}

export default UserCancelAccount;
