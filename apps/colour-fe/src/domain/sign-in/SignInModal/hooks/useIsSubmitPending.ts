import useIsMutationPending from '@/hooks/useIsMutationPending';

function useIsSubmitPending() {
  const emailIsPending = useIsMutationPending(['getCheckEmail']);
  const passwordWhenSignInIsPending = useIsMutationPending(['postSignIn']);
  const passwordWhenSignUpIsPending = useIsMutationPending([
    'postSignUpRequest',
  ]);
  const verifyIsPending = useIsMutationPending(['postVerify']);

  return [
    emailIsPending,
    passwordWhenSignInIsPending,
    passwordWhenSignUpIsPending,
    verifyIsPending,
  ].some((it) => it === true);
}

export default useIsSubmitPending;
