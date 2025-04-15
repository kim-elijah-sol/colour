import { createContext, useContext, useState } from 'react';
import CMYKSlider from './CMYKSlider';
import HexPicker from './HexPicker';
import HSLSlider from './HSLSlider';
import HSVSlider from './HSVSlider';
import LABSlider from './LABSlider';
import PickerTypeSelect from './PickerTypeSelect';
import RGBSlider from './RGBSlider';

type ColourPickerContextType = {
  colour: string;
  setColour: (hex: string) => void;
};

const ColourPickerContext = createContext<ColourPickerContextType>({
  colour: '',
  setColour: () => {},
});

export function useColourPicker() {
  const colourContext = useContext(ColourPickerContext);

  return colourContext;
}

export type PickerType = 'hex' | 'rgb' | 'hsl' | 'hsv' | 'cmyk' | 'lab';

let _pickerType: PickerType = 'hex';

type Props = ColourPickerContextType & {
  containerProps?: Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'children'
  >;
};

function ColourPicker({ containerProps, ...props }: Props) {
  const [pickerType, setPickerType] = useState<PickerType>(_pickerType);

  return (
    <ColourPickerContext.Provider value={props}>
      <div {...containerProps}>
        {pickerType === 'hex' && <HexPicker />}
        {pickerType === 'rgb' && <RGBSlider />}
        {pickerType === 'hsl' && <HSLSlider />}
        {pickerType === 'hsv' && <HSVSlider />}
        {pickerType === 'cmyk' && <CMYKSlider />}
        {pickerType === 'lab' && <LABSlider />}
        <PickerTypeSelect
          pickerType={pickerType}
          setPickerType={setPickerType}
        />
      </div>
    </ColourPickerContext.Provider>
  );
}

export default ColourPicker;
