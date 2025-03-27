import { useEffect } from 'react';

type Callback = (color: string) => void;

function useHandleClickShade(callback: Callback) {
  useEffect(() => {
    function handleClickShade(event: Event) {
      const customEvent = event as CustomEvent<{ color: string }>;
      callback(customEvent.detail.color);
    }

    window.addEventListener('shadeClick', handleClickShade);
    return () => window.removeEventListener('shadeClick', handleClickShade);
  }, []);
}

export default useHandleClickShade;
