import React, { useEffect, useRef } from 'react';

function useIgnoreFirstEffect(
  effect: React.EffectCallback,
  deps: React.DependencyList
) {
  const isFirst = useRef<boolean>(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    effect();
  }, deps);
}

export default useIgnoreFirstEffect;
