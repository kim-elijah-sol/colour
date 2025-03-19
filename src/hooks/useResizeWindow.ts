import React, { useEffect } from 'react';

function useResizeWindow(
  listener: (event: UIEvent) => void,
  deps: React.DependencyList | undefined
) {
  useEffect(() => {
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, deps);
}

export default useResizeWindow;
