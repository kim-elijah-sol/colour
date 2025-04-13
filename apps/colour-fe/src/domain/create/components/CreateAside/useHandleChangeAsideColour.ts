import { useEffect } from 'react';

type Callback = (color: string) => void;

function useHandleChangeAsideColour(callback: Callback) {
  useEffect(() => {
    function handleClickShade(event: Event) {
      const customEvent = event as CustomEvent<{ color: string }>;
      callback(customEvent.detail.color);
    }

    window.addEventListener('changeAsideColour', handleClickShade);
    return () =>
      window.removeEventListener('changeAsideColour', handleClickShade);
  }, []);
}

export default useHandleChangeAsideColour;
