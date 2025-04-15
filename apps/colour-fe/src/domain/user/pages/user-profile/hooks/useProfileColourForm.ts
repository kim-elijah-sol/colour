import toast from '@/components/Toast/toast';
import { useGetMeQuery } from '@/queries/useGetMeQuery';
import { toastOnHttpsError } from '@/utils/https';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { patchChangeProfileColour } from '../apis/patchChangeProfileColour';

function useProfileColourForm() {
  const me = useGetMeQuery();

  const [colour, setColour] = useState('');

  const [inputColour, setInputColour] = useState('');

  const nickname = me.data?.data.nickname ?? '';

  const { mutate, isPending } = useMutation({
    mutationFn: patchChangeProfileColour,
    mutationKey: ['patchChangeProfileColour'],
    onSuccess: () => {
      me.refetch();
      toast.open('Your profile colour has been updated.');
    },
    onError: toastOnHttpsError,
  });

  function onClickSave() {
    if (isPending) return;

    mutate({ profileColour: colour });
  }

  function onBlur(e: React.FocusEvent<HTMLInputElement>) {
    let newValue = e.target.value;

    newValue = newValue.replace(/[^0-9 | ^a-f | ^A-F]/g, '').toUpperCase();

    if (newValue.length !== 6) {
      setInputColour(colour);
      return;
    }

    setColour(newValue);
    setInputColour(newValue);
    setColourPickerValue(newValue);
  }

  function onKeydown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputColour(e.target.value);
  }

  function onChangeColourInColourPicker(colour: string) {
    setColour(colour);
    setInputColour(colour);
  }

  function setColourPickerValue(colour: string) {
    const event = new CustomEvent('changeColour', {
      detail: { colour },
    });
    window.dispatchEvent(event);
  }

  useEffect(() => {
    if (me.data?.data.profileColour) {
      const colour = me.data.data.profileColour;

      setColour(colour);
      setInputColour(colour);
      setColourPickerValue(colour);
    }
  }, [me.data]);

  return {
    nickname,
    colour,
    inputColour,
    onBlur,
    onKeydown,
    onChange,
    setColour,
    setInputColour,
    onChangeColourInColourPicker,
    onClickSave,
    isPending,
  };
}

export default useProfileColourForm;
