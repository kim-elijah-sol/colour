import React, { useEffect, useRef } from 'react';

type Event = React.MouseEvent<HTMLDivElement> | MouseEvent;

type Props = {
  setSaturation: (saturation: number) => void;
  setValue: (value: number) => void;
};

function usePicker({ setSaturation, setValue }: Props) {
  const pickerRef = useRef<HTMLDivElement>(null);

  const isClicked = useRef<boolean>(false);

  function handleMouseEvent(e: Event) {
    const clickLeftPosition = e.clientX;

    const clickTopPosition = e.clientY;

    const boundingClientRect = pickerRef.current?.getBoundingClientRect();

    if (!boundingClientRect) return;

    const elementWidth = boundingClientRect.width;

    const elementLeftPosition = boundingClientRect.x;

    const elementHeight = boundingClientRect.height;

    const elementTopPosition = boundingClientRect.y + elementHeight;

    let leftPosition =
      ((clickLeftPosition - elementLeftPosition) / elementWidth) * 100;

    let topPosition =
      ((elementTopPosition - clickTopPosition) / elementHeight) * 100;

    leftPosition = Math.max(Math.min(leftPosition, 100), 0);
    topPosition = Math.max(Math.min(topPosition, 100), 0);

    setSaturation(leftPosition);
    setValue(topPosition);
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
  }, []);

  return {
    pickerRef,
    onMouseDown,
  };
}

export default usePicker;
