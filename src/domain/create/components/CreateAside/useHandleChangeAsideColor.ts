import { useEffect } from 'react';

type Callback = (color: string) => void;

function useHandleChangeAsdieColor(callback: Callback) {
  useEffect(() => {
    function handleClickShade(event: Event) {
      const customEvent = event as CustomEvent<{ color: string }>;
      callback(customEvent.detail.color);
    }

    window.addEventListener('changeAsideColor', handleClickShade);
    return () =>
      window.removeEventListener('changeAsideColor', handleClickShade);
  }, []);
}

export default useHandleChangeAsdieColor;
