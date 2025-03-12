import { useColorPickerContext } from '@/stores/createColorPickerContext';
import {
  getHue,
  hexToRgb,
  hsvToRgb,
  rgbToHex,
  rgbToHsv,
} from '@/utils/functions';
import React, { useEffect, useRef } from 'react';

type Event = React.MouseEvent<HTMLDivElement> | MouseEvent;

function useHueSlider() {
  const { color, setColor } = useColorPickerContext();

  const colorRef = useRef<string>(color);

  const sliderRef = useRef<HTMLDivElement>(null);

  const isClicked = useRef<boolean>(false);

  function updateColor(e: Event) {
    const color = colorRef.current;

    const clickPosition = e.clientX;

    const boundingClientRect = sliderRef.current?.getBoundingClientRect();

    if (!boundingClientRect) return;

    const elementWidth = boundingClientRect.width;

    const elementStartPosition = boundingClientRect.x;

    let position =
      ((clickPosition - elementStartPosition) / elementWidth) * 100;

    position = Math.max(Math.min(position, 99.9), 0);

    const hue = Math.round(position * 3.6);

    const currentHsv = rgbToHsv(hexToRgb(color));

    const newColor = rgbToHex(hsvToRgb([hue, currentHsv[1], currentHsv[2]]));

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
    colorRef.current = color;
  }, [color]);

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
