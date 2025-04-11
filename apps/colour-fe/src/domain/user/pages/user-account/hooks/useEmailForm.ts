import toast from '@/components/Toast/toast';
import { useGetMeQuery } from '@/queries/useGetMeQuery';
import { toastOnHttpsError } from '@/utils/https';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { isEmail } from 'validator';
import { patchVerifyChangeEmail } from '../apis/patchVerifyChangeEmail';
import { postChangeEmailRequest } from '../apis/postChangeEmailRequest';

function useEmailForm() {
  const me = useGetMeQuery();

  const [email, setEmail] = useState('');

  const [verificationId, setVerificationId] = useState<string | null>(null);

  const [verifyCode, setVerifyCode] = useState('');

  const changeEmailRequest = useMutation({
    mutationKey: ['postChangeEmailRequest'],
    mutationFn: postChangeEmailRequest,
    onSuccess: (data) => {
      setVerificationId(data.data.verificationId);
      setVerifyCode('');
      toast.open(
        `We've sent a verification code to your requested email address.`
      );
    },
    onError: toastOnHttpsError,
  });

  const verifyChangeEmail = useMutation({
    mutationKey: ['patchVerifyChangeEmail'],
    mutationFn: patchVerifyChangeEmail,
    onSuccess: () => {
      setVerificationId(null);
      me.refetch();
      toast.open(`Your email address has been updated.`);
    },
    onError: toastOnHttpsError,
  });

  const isOriginal = email === me.data?.data.email;

  const isDisabled = ((): boolean => {
    if (isOriginal) return true;
    if (me.isPending) return true;
    if (verificationId === null && !isEmail(email)) return true;
    if (verificationId !== null && verifyCode.length !== 6) return true;

    return false;
  })();

  const isCodeInputShow = verificationId !== null;

  const isPending = changeEmailRequest.isPending || verifyChangeEmail.isPending;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isDisabled) return;
    if (isPending) return;

    if (verificationId) {
      verifyChangeEmail.mutate({
        id: verificationId,
        code: verifyCode,
      });
    } else {
      changeEmailRequest.mutate({
        email,
      });
    }
  }

  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleChangeVerifyCode(e: React.ChangeEvent<HTMLInputElement>) {
    setVerifyCode(e.target.value);
  }

  useEffect(() => {
    if (me.data?.data.email) {
      setEmail(me.data.data.email);
    }
  }, [me.data?.data.email]);

  return {
    email,
    handleChangeEmail,
    handleSubmit,
    isDisabled,
    isCodeInputShow,
    verifyCode,
    handleChangeVerifyCode,
    isPending,
  };
}

export default useEmailForm;
