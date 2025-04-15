import Avatar from '@/components/Avatar';
import ColourPicker from '@/components/ColourPicker';
import Loader from '@/components/Loader';
import userContentStyles from '@/domain/user/styles/user-content-styles.css';
import classNames from 'classnames';
import { Check, Palette } from 'lucide-react';
import useProfileColourForm from '../../hooks/useProfileColourForm';
import useProfileColourPicker from '../../hooks/useProfileColourPicker';
import * as style from './style.css';

function ProfileColourForm() {
  const { isColourPickerFadeOut, isColourPickerShow, setIsColourPickerShow } =
    useProfileColourPicker();

  const {
    nickname,
    colour,
    inputColour,
    onBlur,
    onKeydown,
    onChange,
    onChangeColourInColourPicker,
    onClickSave,
    isPending,
  } = useProfileColourForm();

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
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={onKeydown}
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
                setColour={onChangeColourInColourPicker}
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

      <button
        type='button'
        onClick={onClickSave}
        className={userContentStyles.button}
      >
        {!isPending ? 'Save' : <Loader size={20} />}
      </button>
    </div>
  );
}

export default ProfileColourForm;
