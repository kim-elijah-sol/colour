import { useEffect } from 'react';

type Callback = (colour: string) => void;

function useHandleChangeAsideColour(callback: Callback) {
  useEffect(() => {
    function handleClickShade(event: Event) {
      const customEvent = event as CustomEvent<{ colour: string }>;
      callback(customEvent.detail.colour);
    }

    window.addEventListener('changeAsideColour', handleClickShade);
    return () =>
      window.removeEventListener('changeAsideColour', handleClickShade);
  }, []);
}

export default useHandleChangeAsideColour;
