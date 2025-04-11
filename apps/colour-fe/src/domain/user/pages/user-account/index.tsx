import * as signInModalStyles from '@/domain/sign-in/SignInModal/components/style.css';
import usePasswordValidator from '@/hooks/usePasswordValidator';
import { useState } from 'react';
import userContentStyles from '../../styles/user-content-styles.css';

function UserAccount() {
  const [email, setEmail] = useState('');

  const [currentPassword, setCurrentPassword] = useState('');

  const [newPassword, setNewPassword] = useState('');

  const { length, letterAndNumber, specialChar } =
    usePasswordValidator(newPassword);

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
          <form className={userContentStyles.form}>
            <input
              type='email'
              placeholder='your email'
              className={userContentStyles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type='submit' className={userContentStyles.button}>
              Save
            </button>
          </form>
        </section>
        <section className={userContentStyles.section}>
          <h3 className={userContentStyles.sectionTitle}>Password</h3>
          <form className={userContentStyles.form}>
            <input
              type='password'
              placeholder='current password'
              className={userContentStyles.input}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <div>
              <input
                type='password'
                placeholder='new password'
                className={userContentStyles.input}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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
            <button type='submit' className={userContentStyles.button}>
              Save
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default UserAccount;
