import React, { useEffect } from 'react';

function useWindowScroll(
  callback: (event: Event) => void,
  deps?: React.DependencyList
) {
  useEffect(() => {
    window.addEventListener('scroll', callback);

    return () => {
      window.removeEventListener('scroll', callback);
    };
  }, [deps]);
}

export default useWindowScroll;
