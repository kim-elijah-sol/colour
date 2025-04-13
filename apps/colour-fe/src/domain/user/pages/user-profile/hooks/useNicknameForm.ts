import toast from '@/components/Toast/toast';
import { useGetMeQuery } from '@/queries/useGetMeQuery';
import { toastOnHttpsError } from '@/utils/https';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { patchChangeNickname } from '../apis/patchChangeNickname';

function useNicknameForm() {
  const [nickname, setNickname] = useState('');

  const me = useGetMeQuery();

  const changeNickname = useMutation({
    mutationFn: patchChangeNickname,
    mutationKey: ['patchChangeNickname'],
    onSuccess: () => {
      me.refetch();
      toast.open(`Your nickname has been updated.`);
    },
    onError: toastOnHttpsError,
  });

  const isOriginal = nickname === (me.data?.data.nickname ?? '');

  const isDisabled = ((): boolean => {
    if (isOriginal) return true;
    if (me.isPending) return true;

    return false;
  })();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isDisabled) return;
    if (changeNickname.isPending) return;

    changeNickname.mutate({
      nickname: nickname || null,
    });
  }

  function handleChangeNickname(e: React.ChangeEvent<HTMLInputElement>) {
    setNickname(
      e.target.value
        .replace(/[^0-9|^a-z|^A-Z|^\_ |^\-]/g, '')
        .replaceAll(' ', '')
    );
  }

  useEffect(() => {
    if (me.data?.data.nickname !== undefined) {
      setNickname(me.data.data.nickname ?? '');
    }
  }, [me.data?.data.nickname]);

  return {
    nickname,
    handleChangeNickname,
    handleSubmit,
    isDisabled,
    isPending: changeNickname.isPending,
  };
}

export default useNicknameForm;
