import usePasswordValidator from '@/hooks/usePasswordValidator';
import useSignInStore from '@/stores/useSignInStore';
import isEmail from 'validator/lib/isEmail';

function useIsSubmitDisabled(): boolean {
  const step = useSignInStore((state) => state.step);
  const email = useSignInStore((state) => state.email);
  const password = useSignInStore((state) => state.password);
  const passwordValidate = usePasswordValidator(password);
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
