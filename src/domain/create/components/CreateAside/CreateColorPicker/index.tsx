import { PickerType } from '@/stores/createColorPickerContext';
import { useState } from 'react';
import HexPicker from './HexPicker';
import PickerTypeSelect from './PickerTypeSelect';
import * as style from './style.css';

let _pickerType: PickerType = 'hex';

function CreateColorPicker() {
  const [pickerType, setPickerType] = useState<PickerType>(_pickerType);

  return (
    <div className={style.container}>
      {pickerType === 'hex' && <HexPicker />}
      <PickerTypeSelect pickerType={pickerType} setPickerType={setPickerType} />
    </div>
  );
}

export default CreateColorPicker;
