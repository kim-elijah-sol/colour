import toast from '@/components/Toast/toast';
import { useGetMeQuery } from '@/queries/useGetMeQuery';
import { toastOnHttpsError } from '@/utils/https';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { patchChangeIntroduce } from '../apis/patchChangeIntroduce';

function useIntroduceForm() {
  const [introduce, setIntroduce] = useState('');

  const me = useGetMeQuery();

  const changeIntroduce = useMutation({
    mutationFn: patchChangeIntroduce,
    mutationKey: ['patchChangeIntroduce'],
    onSuccess: () => {
      me.refetch();
      toast.open('Your introduce has been updated.');
    },
    onError: toastOnHttpsError,
  });

  const isOriginal = introduce === (me.data?.data.introduce ?? '');

  const isDisabled = ((): boolean => {
    if (isOriginal) return true;
    if (me.isPending) return true;

    return false;
  })();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isDisabled) return;
    if (changeIntroduce.isPending) return;

    changeIntroduce.mutate({
      introduce: introduce,
    });
  }

  function handleChangeIntroduce(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setIntroduce(e.target.value);
  }

  useEffect(() => {
    if (me.data?.data.introduce !== undefined) {
      setIntroduce(me.data.data.introduce ?? '');
    }
  }, [me.data?.data.introduce]);

  return {
    introduce,
    handleChangeIntroduce,
    handleSubmit,
    isDisabled,
    isPending: changeIntroduce.isPending,
  };
}

export default useIntroduceForm;
