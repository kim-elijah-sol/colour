import Modal from '@/utils/Modal';
import React, { useEffect, useRef, useState } from 'react';
import Description from './Description';
import * as style from './style.css';
import Title from './Title';

type Props = {
  close: () => void;
};

type Step = 'email' | 'password' | 'verify';

type SubmitType = 'sign-in' | 'sign-up';

function SignInModal({ close }: Props) {
  const $email = useRef<HTMLInputElement | null>(null);
  const $password = useRef<HTMLInputElement | null>(null);
  const $verify = useRef<HTMLInputElement | null>(null);

  const [step, setStep] = useState<Step>('email');

  const [submitType, setSubmitType] = useState<SubmitType>('sign-in');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (step === 'email') {
      setStep('password');
      setSubmitType('sign-up');
    } else if (step === 'password') {
      if (submitType === 'sign-in') {
        close();
      } else {
        setStep('verify');
      }
    }
  }

  const descriptionTranslateY = (() => {
    if (step === 'email') return 0;
    if (step === 'password' && submitType === 'sign-in') return -24;
    if (step === 'password' && submitType === 'sign-up') return -48;
    return -72;
  })();

  const inputRollingTranslateX = `translateX(${
    step === 'email' ? 0 : step === 'password' ? -336 : -672
  }px)`;

  useEffect(() => {
    if (step === 'email') $email.current?.focus({ preventScroll: true });
    else if (step === 'password')
      $password.current?.focus({ preventScroll: true });
    else $verify.current?.focus({ preventScroll: true });
  }, [step]);

  return (
    <Modal>
      <Modal.Header right={<Modal.Header.CloseButton onClick={close} />} />

      <div className={style.container}>
        <Title translateY={submitType === 'sign-in' ? 0 : -38} />

        <Description translateY={descriptionTranslateY} />

        <form onSubmit={handleSubmit}>
          <div className={style.inputWrapper}>
            <div
              className={style.inputRolling}
              style={{
                transform: inputRollingTranslateX,
              }}
            >
              <div className={style.inputBox}>
                <input
                  ref={$email}
                  disabled={step !== 'email'}
                  type='email'
                  className={style.input}
                  placeholder='your email'
                />
              </div>
              <div className={style.inputBox}>
                <input
                  ref={$password}
                  disabled={step !== 'password'}
                  type='password'
                  maxLength={20}
                  className={style.input}
                  placeholder='your password'
                />
              </div>
              <div className={style.inputBox}>
                <input
                  ref={$verify}
                  disabled={step !== 'verify'}
                  type='text'
                  maxLength={6}
                  className={style.input}
                  placeholder='verify code (6-digit)'
                />
              </div>
            </div>
          </div>

          <button type='submit' className={style.button}>
            Next
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default SignInModal;
