import React, { useEffect, useRef } from 'react';

type Event = React.MouseEvent<HTMLDivElement> | MouseEvent;

type Props = {
  onChange: (value: number) => void;
  max?: number;
  min?: number;
};

function useSlider(
  { onChange, max = 100, min = 0 }: Props,
  deps: React.DependencyList
) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const isClicked = useRef<boolean>(false);

  function handleMouseEvent(e: Event) {
    const clickPosition = e.clientX;

    const boundingClientRect = sliderRef.current?.getBoundingClientRect();

    if (!boundingClientRect) return;

    const elementWidth = boundingClientRect.width;

    const elementStartPosition = boundingClientRect.x;

    let position =
      ((clickPosition - elementStartPosition) / elementWidth) * 100;

    position = Math.max(Math.min(position, 100), 0);

    position = Math.round(min + (position / 100) * (Math.abs(min) + max));

    onChange(position);
  }

  function onMouseDown(e: Event) {
    isClicked.current = true;

    handleMouseEvent(e);
  }

  function onMouseMove(e: Event) {
    if (isClicked.current) handleMouseEvent(e);
  }

  function onMouseUp() {
    isClicked.current = false;
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, deps);

  return {
    sliderRef,
    onMouseDown,
  };
}

export default useSlider;
