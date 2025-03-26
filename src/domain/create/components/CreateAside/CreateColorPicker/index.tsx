import { PickerType } from '@/stores/createColorPickerContext';
import { useState } from 'react';
import CMYKSlider from './CMYKSlider';
import HexPicker from './HexPicker';
import HSLSlider from './HSLSlider';
import HSVSlider from './HSVSlider';
import LABSlider from './LABSlider';
import PickerTypeSelect from './PickerTypeSelect';
import RGBSlider from './RGBSlider';
import * as style from './style.css';

let _pickerType: PickerType = 'hex';

function CreateColorPicker() {
  const [pickerType, setPickerType] = useState<PickerType>(_pickerType);

  return (
    <div className={style.container}>
      {pickerType === 'hex' && <HexPicker />}
      {pickerType === 'rgb' && <RGBSlider />}
      {pickerType === 'hsl' && <HSLSlider />}
      {pickerType === 'hsv' && <HSVSlider />}
      {pickerType === 'cmyk' && <CMYKSlider />}
      {pickerType === 'lab' && <LABSlider />}
      <PickerTypeSelect pickerType={pickerType} setPickerType={setPickerType} />
    </div>
  );
}

export default CreateColorPicker;
