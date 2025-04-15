import Avatar from '@/components/Avatar';
import userContentStyles from '@/domain/user/styles/user-content-styles.css';
import { useGetMeQuery } from '@/queries/useGetMeQuery';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import * as style from './style.css';

function ProfileColourForm() {
  const { data } = useGetMeQuery();

  const [colour, setColour] = useState('');

  const [inputColour, setInputColour] = useState('');

  const nickname = data?.data.nickname ?? '';

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    let newValue = e.target.value;

    newValue = newValue.replace(/[^0-9 | ^a-f | ^A-F]/g, '').toUpperCase();

    if (newValue.length !== 6) {
      setInputColour(colour);
      return;
    }

    setColour(newValue);
    setInputColour(newValue);
  }

  function handleKeydown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  }

  useEffect(() => {
    if (data?.data.profileColour) {
      setColour(data.data.profileColour);
      setInputColour(data.data.profileColour);
    }
  }, [data]);

  return (
    <div className={userContentStyles.form}>
      <div className={style.container}>
        <Avatar colour={colour} nickname={nickname} />
        <div className={style.inputWrapper}>
          <input
            type='text'
            maxLength={6}
            className={classNames(userContentStyles.input, style.input)}
            value={inputColour}
            onChange={(e) => setInputColour(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeydown}
          />
        </div>
      </div>

      <button type='button' className={userContentStyles.button}>
        Save
      </button>
    </div>
  );
}

export default ProfileColourForm;
