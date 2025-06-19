import React from 'react';
import useWindowScroll from './useWindowScroll';

type UseInfiniteScrollOption = {
  threshold?: number;
};

function useInfiniteScroll(
  callback: () => void,
  deps?: React.DependencyList,
  option?: UseInfiniteScrollOption
) {
  useWindowScroll(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    const threshold = option?.threshold ?? 0;

    if (scrollTop + clientHeight >= scrollHeight - threshold) {
      callback();
    }
  }, deps);
}

export default useInfiniteScroll;
