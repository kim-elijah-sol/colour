import { PickerType } from '@/stores/createColorPickerContext';
import { useState } from 'react';
import HexPicker from './HexPicker';

let _pickerType: PickerType = 'hex';

function CreateColorPicker() {
  const [pickerType, setPickerType] = useState<PickerType>(_pickerType);

  return <div>{pickerType === 'hex' && <HexPicker />}</div>;
}

export default CreateColorPicker;
