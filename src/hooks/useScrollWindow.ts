import React, { useEffect } from 'react';

function useScrollWindow(
  listener: (event: Event) => void,
  deps: React.DependencyList | undefined
) {
  useEffect(() => {
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, deps);
}

export default useScrollWindow;
