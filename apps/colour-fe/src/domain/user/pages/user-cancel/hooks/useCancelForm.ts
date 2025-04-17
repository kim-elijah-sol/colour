import { toastOnHttpsError } from '@/utils/https';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { deleteCancelAccount } from '../apis/deleteCancelAccount';

function useCancelForm() {
  const [password, setPassword] = useState('');

  const cancelAccount = useMutation({
    mutationFn: deleteCancelAccount,
    mutationKey: ['deleteCancelAccount'],
    onSuccess: () => {
      localStorage.removeItem('colour-access-token');
      localStorage.removeItem('colour-refresh-token');

      location.replace('/');
    },
    onError: toastOnHttpsError,
  });

  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isDisabled) return;

    cancelAccount.mutate({ password });
  }

  const isDisabled = password.length === 0;

  return {
    password,
    handleChangePassword,
    handleSubmit,
    isDisabled,
    isPending: cancelAccount.isPending,
  };
}

export default useCancelForm;
