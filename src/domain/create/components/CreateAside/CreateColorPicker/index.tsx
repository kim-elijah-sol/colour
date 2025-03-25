import { PickerType } from '@/stores/createColorPickerContext';
import { useState } from 'react';
import HexPicker from './HexPicker';
import * as style from './style.css';

let _pickerType: PickerType = 'hex';

function CreateColorPicker() {
  const [pickerType, setPickerType] = useState<PickerType>(_pickerType);

  return (
    <div className={style.container}>
      {pickerType === 'hex' && <HexPicker />}
    </div>
  );
}

export default CreateColorPicker;
