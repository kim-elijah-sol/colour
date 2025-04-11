import { useGetMeQuery } from '@/queries/useGetMeQuery';
import { useMutation } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import { isEmail } from 'validator';
import { postChangeEmailRequest } from '../apis/postChangeEmailRequest';

function useEmailForm() {
  const { data } = useGetMeQuery();

  const [email, setEmail] = useState('');

  const [verificationId, setVerificationId] = useState<string | null>(null);

  const [verifyCode, setVerifyCode] = useState('');

  const changeEmailRequest = useMutation({
    mutationKey: ['postChangeEmailRequest'],
    mutationFn: postChangeEmailRequest,
    onSuccess: (data) => {
      setVerificationId(data.data.verificationId);
      setVerifyCode('');
    },
  });

  const isOriginal = email === data?.data.email;

  const isDisabled = isOriginal || !isEmail(email);

  const isCodeInputShow = verificationId !== null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isDisabled) {
      return;
    }

    changeEmailRequest.mutate({
      email,
    });
  }

  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleChangeVerifyCode(e: React.ChangeEvent<HTMLInputElement>) {
    setVerifyCode(e.target.value);
  }

  useEffect(() => {
    if (data?.data.email) {
      setEmail(data?.data.email);
    }
  }, [data?.data.email]);

  return {
    email,
    handleChangeEmail,
    handleSubmit,
    isDisabled,
    isCodeInputShow,
    verifyCode,
    handleChangeVerifyCode,
  };
}

export default useEmailForm;
