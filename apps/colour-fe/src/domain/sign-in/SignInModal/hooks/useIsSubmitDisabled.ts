import useSignInStore from '@/stores/useSignInStore';
import isEmail from 'validator/lib/isEmail';
import usePasswordValidator from './usePasswordValidator';

function useIsSubmitDisabled(): boolean {
  const step = useSignInStore((state) => state.step);
  const email = useSignInStore((state) => state.email);
  const passwordValidate = usePasswordValidator();
  const verifyCode = useSignInStore((state) => state.verifyCode);

  if (step === 'email') return !isEmail(email);
  if (step === 'password')
    return (
      !passwordValidate.length ||
      !passwordValidate.letterAndNumber ||
      !passwordValidate.specialChar
    );
  return verifyCode.length !== 6;
}

export default useIsSubmitDisabled;
