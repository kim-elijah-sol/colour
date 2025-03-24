import { TabSelect } from '@/components/inputs';
import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { useState } from 'react';
import ColorInfoList from './ColorInfoList';
import PaletteColorButton from './PaletteColorButton';
import PaletteContainer from './PaletteContainer';
import * as style from './style.css';

function CreateAside() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedDetail, setSelectedDetail] = useState<string>('info');

  const { colors } = useCreatePaletteColors();

  const selectedColor = colors[selectedIndex];

  return (
    <div className={style.aside}>
      <PaletteContainer>
        {colors.map((color, index) => (
          <PaletteColorButton
            color={color}
            isSelected={index === selectedIndex}
            onClick={() => setSelectedIndex(index)}
            key={color}
          />
        ))}
      </PaletteContainer>

      <TabSelect value={selectedDetail} onChange={setSelectedDetail}>
        <TabSelect.Option value='info'>Info</TabSelect.Option>
        <TabSelect.Option value='contrast'>Contrast</TabSelect.Option>
        <TabSelect.Option value='shades'>Shades</TabSelect.Option>
      </TabSelect>

      {selectedDetail === 'info' && <ColorInfoList color={selectedColor} />}
    </div>
  );
}

export default CreateAside;
