import { TabSelect } from '@/components/inputs';
import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { useState } from 'react';
import ColorInfoList from './ColorInfoList';
import ContrastInfoList from './ContrastInfoList';
import PaletteColorButton from './PaletteColorButton';
import PaletteContainer from './PaletteContainer';
import ShadeInfoList from './ShadeInfoList';
import * as style from './style.css';

function CreateAside() {
  const [selectedDetail, setSelectedDetail] = useState<string>('info');

  const { selectedIndex, setSelectedIndex, colors } = useCreatePaletteColors();

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
      {selectedDetail === 'contrast' && (
        <ContrastInfoList color={selectedColor} />
      )}
      {selectedDetail === 'shades' && <ShadeInfoList color={selectedColor} />}
    </div>
  );
}

export default CreateAside;
