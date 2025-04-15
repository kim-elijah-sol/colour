import { useGetMeQuery } from '@/queries/useGetMeQuery';
import React, { useEffect, useState } from 'react';

function useProfileColourForm() {
  const { data } = useGetMeQuery();

  const [colour, setColour] = useState('');

  const [inputColour, setInputColour] = useState('');

  const nickname = data?.data.nickname ?? '';

  function onBlur(e: React.FocusEvent<HTMLInputElement>) {
    let newValue = e.target.value;

    newValue = newValue.replace(/[^0-9 | ^a-f | ^A-F]/g, '').toUpperCase();

    if (newValue.length !== 6) {
      setInputColour(colour);
      return;
    }

    setColour(newValue);
    setInputColour(newValue);

    const event = new CustomEvent('changeColour', {
      detail: { colour: newValue },
    });
    window.dispatchEvent(event);
  }

  function onKeydown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputColour(e.target.value);
  }

  function onChangeColourInColourPicker(colour: string){

    setColour(colour);
    setInputColour(colour);
  }

  useEffect(() => {
    if (data?.data.profileColour) {
      setColour(data.data.profileColour);
      setInputColour(data.data.profileColour);
    }
  }, [data]);

  return {
    nickname,
    colour,
    inputColour,
    onBlur,
    onKeydown,
    onChange,
    setColour,
    setInputColour,
    onChangeColourInColourPicker
  };
}

export default useProfileColourForm;
