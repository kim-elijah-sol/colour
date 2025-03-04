import {
  rgbToHsl,
  hexToRgb,
  rgbToHex,
  hslToRgb,
  getHue,
  hsvToRgb,
  rgbToHsv,
} from '@/utils/functions';
import { useEffect, useRef } from 'react';

type Event = React.MouseEvent<HTMLDivElement> | MouseEvent;

function usePicker(
  color: string,
  setColor: React.Dispatch<React.SetStateAction<string>>
) {
  const colorRef = useRef<string>(color);

  const pickerRef = useRef<HTMLDivElement>(null);

  const isClicked = useRef<boolean>(false);

  const hsv = rgbToHsv(hexToRgb(color));

  function updateColor(e: Event) {
    const color = colorRef.current;

    const clickLeftPosition = e.clientX;

    const clickTopPosition = e.clientY;

    const boundingClientRect = pickerRef.current?.getBoundingClientRect();

    if (!boundingClientRect) return;

    const elementWidth = boundingClientRect.width;

    const elementLeftPosition = boundingClientRect.x;

    const elementHeight = boundingClientRect.height;

    const elementTopPosition = boundingClientRect.y + elementHeight;

    const leftPosition =
      ((clickLeftPosition - elementLeftPosition) / elementWidth) * 100;

    const topPosition =
      ((elementTopPosition - clickTopPosition) / elementHeight) * 100;

    const hsv = rgbToHsv(hexToRgb(color));

    if (
      leftPosition > 100 ||
      leftPosition < 0 ||
      topPosition > 100 ||
      topPosition < 0
    )
      return;

    const newColor = rgbToHex(
      hsvToRgb([hsv[0], Math.round(leftPosition), Math.round(topPosition)])
    );

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

  const pickerHighlightColor = rgbToHex(
    hslToRgb([getHue(hexToRgb(color)), 100, 50])
  );

  const contollerLeft = `${hsv[1]}%`;

  const contollerBottom = `${hsv[2]}%`;

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
    pickerRef,
    onMouseDown,
    pickerHighlightColor,
    contollerLeft,
    contollerBottom,
  };
}

export default usePicker;
