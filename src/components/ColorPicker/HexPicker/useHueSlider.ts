import {
  getHue,
  hexToRgb,
  hslToRgb,
  rgbToHex,
  rgbToHsl,
} from '@/utils/functions';
import React, { useEffect, useRef } from 'react';

type Event = React.MouseEvent<HTMLDivElement> | MouseEvent;

function useHueSlider(
  color: string,
  setColor: React.Dispatch<React.SetStateAction<string>>
) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const isClicked = useRef<boolean>(false);

  function updateColor(e: Event) {
    const clickPosition = e.clientX;

    const boundingClientRect = sliderRef.current?.getBoundingClientRect();

    if (!boundingClientRect) return;

    const elementWidth = boundingClientRect.width;

    const elementStartPosition = boundingClientRect.x;

    const position =
      ((clickPosition - elementStartPosition) / elementWidth) * 100;

    if (position >= 99.9 || position < 0) return;

    const hue = Math.round(position * 3.6);

    const currentHsl = rgbToHsl(hexToRgb(color));

    const newColor = rgbToHex(hslToRgb([hue, currentHsl[1], currentHsl[2]]));

    setColor(newColor);
  }

  function onMouseDown(e: Event) {
    isClicked.current = true;

    updateColor(e);
  }

  function onMouseMove(e: Event) {
    if (isClicked.current) updateColor(e);
  }

  function onMouseUp() {
    isClicked.current = false;
  }

  const sliderLeft = (getHue(hexToRgb(color)) / 360) * 100;

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return {
    sliderRef,
    sliderLeft,
    onMouseDown,
  };
}

export default useHueSlider;
