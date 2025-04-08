import { useModalShowContext } from '@/stores/ModalShowContext';
import Modal from '@/utils/components/Modal';
import useInputRollingHeight from '../hooks/useInputRollingHeight';
import useInputRollingTranslateX from '../hooks/useInputRollingTranslateX';
import useSignInInputAutoFocus from '../hooks/useSignInInputAutoFocus';
import useSignInSubmit from '../hooks/useSignInSubmit';
import Description from './Description';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import * as style from './style.css';
import Title from './Title';
import VerifyCodeInput from './VerifyCodeInput';

function SignInModal() {
  const { close } = useModalShowContext();

  const { $email, $password, $verify } = useSignInInputAutoFocus();

  const handleSubmit = useSignInSubmit();

  const inputRollingTranslateX = useInputRollingTranslateX();

  const inputRollingHeight = useInputRollingHeight();

  return (
    <Modal>
      <Modal.Header right={<Modal.Header.CloseButton onClick={close} />} />

      <div className={style.container}>
        <Title />

        <Description />

        <form onSubmit={handleSubmit}>
          <div
            className={style.inputWrapper}
            style={{ height: inputRollingHeight }}
          >
            <div
              className={style.inputRolling}
              style={{
                transform: inputRollingTranslateX,
              }}
            >
              <EmailInput ref={$email} />
              <PasswordInput ref={$password} />
              <VerifyCodeInput ref={$verify} />
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
