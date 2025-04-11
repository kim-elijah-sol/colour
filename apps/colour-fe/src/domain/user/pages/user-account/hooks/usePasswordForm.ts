import toast from '@/components/Toast/toast';
import usePasswordValidator from '@/hooks/usePasswordValidator';
import { toastOnHttpsError } from '@/utils/https';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { patchChangePassword } from '../apis/patchChangePassword';

function usePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState('');

  const [newPassword, setNewPassword] = useState('');

  const changePassword = useMutation({
    mutationKey: ['patchChangePassword'],
    mutationFn: patchChangePassword,
    onSuccess: () => {
      toast.open('Your password has been successfully updated.');
      setCurrentPassword('');
      setNewPassword('');
    },
    onError: toastOnHttpsError,
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isDisabled) return;
    if (changePassword.isPending) return;

    changePassword.mutate({
      currentPassword,
      newPassword,
    });
  }

  function handleChangeCurrentPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentPassword(e.target.value);
  }

  function handleChangeNewPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setNewPassword(e.target.value);
  }

  const currentPasswordValidate = usePasswordValidator(currentPassword);

  const newPasswordValidate = usePasswordValidator(newPassword);

  const isDisabled =
    Object.values(currentPasswordValidate).some((it) => it === false) ||
    Object.values(newPasswordValidate).some((it) => it === false) ||
    currentPassword === newPassword;

  return {
    currentPassword,
    handleChangeCurrentPassword,
    newPassword,
    handleChangeNewPassword,
    validate: newPasswordValidate,
    isDisabled,
    handleSubmit,
    isPending: changePassword.isPending,
  };
}

export default usePasswordForm;
