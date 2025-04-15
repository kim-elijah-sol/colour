import Avatar from '@/components/Avatar';
import ColourPicker from '@/components/ColourPicker';
import userContentStyles from '@/domain/user/styles/user-content-styles.css';
import { useGetMeQuery } from '@/queries/useGetMeQuery';
import classNames from 'classnames';
import { Check, Palette } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import * as style from './style.css';

function ProfileColourForm() {
  const [isColourPickerShow, _setIsColourPickerShow] = useState(false);

  const [isColourPickerFadeOut, setIsColourPickerFadeOut] = useState(false);

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

    if (isColourPickerShow) {
      const event = new CustomEvent('changeColour', {
        detail: { colour: newValue },
      });
      window.dispatchEvent(event);
    }
  }

  function handleKeydown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  }

  function setIsColourPickerShow(isColourPickerShow: boolean) {
    if (isColourPickerShow) {
      _setIsColourPickerShow(true);
    } else {
      setIsColourPickerFadeOut(true);
      setTimeout(() => {
        setIsColourPickerFadeOut(false);
        _setIsColourPickerShow(false);
      }, 210);
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

          <button
            type='button'
            className={style.paletteButton}
            onClick={() => setIsColourPickerShow(!isColourPickerShow)}
          >
            <Palette size={20} />
          </button>

          {isColourPickerShow && (
            <div
              className={classNames(
                style.colourPickerContainer,
                isColourPickerFadeOut ? style.colourPickerFadeOut : undefined
              )}
            >
              <ColourPicker
                colour={colour}
                setColour={setColour}
                bottomRight={
                  <button
                    type='button'
                    className={style.okButton}
                    onClick={() => setIsColourPickerShow(false)}
                  >
                    <Check size={20} />
                  </button>
                }
              />
            </div>
          )}
        </div>
      </div>

      <button type='button' className={userContentStyles.button}>
        Save
      </button>
    </div>
  );
}

export default ProfileColourForm;
