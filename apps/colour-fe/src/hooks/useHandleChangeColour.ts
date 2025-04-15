import { useEffect } from 'react';

type Callback = (colour: string) => void;

function useHandleChangeColour(callback: Callback) {
  useEffect(() => {
    function handleClickShade(event: Event) {
      const customEvent = event as CustomEvent<{ colour: string }>;
      callback(customEvent.detail.colour);
    }

    window.addEventListener('changeColour', handleClickShade);
    return () => window.removeEventListener('changeColour', handleClickShade);
  }, []);
}

export default useHandleChangeColour;
