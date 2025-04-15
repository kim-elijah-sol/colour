import { useState } from 'react';

function useProfileColourPicker() {
  const [isColourPickerShow, _setIsColourPickerShow] = useState(false);

  const [isColourPickerFadeOut, setIsColourPickerFadeOut] = useState(false);

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

  return {
    isColourPickerShow,
    isColourPickerFadeOut,
    setIsColourPickerShow,
  };
}

export default useProfileColourPicker;
