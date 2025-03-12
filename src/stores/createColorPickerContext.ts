import { createContext, useContext } from 'react';

export type PickerType = 'hex' | 'rgb';

type State = {
  color: string;
  pickerType: PickerType;
};

type Actions = {
  setColor: (color: string) => void;
  setPickerType: (pickerType: PickerType) => void;
};

export type ColorPicker = State & Actions;

export const ColorPickerContext = createContext<ColorPicker>({
  color: '',
  pickerType: 'hex',
  setColor() {},
  setPickerType() {},
});

export function useColorPickerContext() {
  const colorPicker = useContext(ColorPickerContext);

  return colorPicker;
}
