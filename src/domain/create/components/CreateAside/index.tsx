import { TabSelect } from '@/components/inputs';
import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { useEffect, useState } from 'react';
import ColorInfoList from './ColorInfoList';
import ContrastInfoList from './ContrastInfoList';
import CreateColorPicker from './CreateColorPicker';
import PaletteColorButton from './PaletteColorButton';
import PaletteContainer from './PaletteContainer';
import ShadeInfoList from './ShadeInfoList';
import * as style from './style.css';

function CreateAside() {
  const [selectedDetail, setSelectedDetail] = useState<string>('info');

  const { selectedIndex, setSelectedIndex, colors } = useCreatePaletteColors();

  function handleClickPaletteColor(index: number) {
    setSelectedIndex(index)

    const color = colors[index]

    const event = new CustomEvent('changeAsideColor', { detail: { color } });
    window.dispatchEvent(event);
  }

  return (
    <div className={style.aside}>
      <PaletteContainer>
        {colors.map((color, index) => (
          <PaletteColorButton
            color={color}
            isSelected={index === selectedIndex}
            onClick={() => handleClickPaletteColor(index)}
            key={color}
          />
        ))}
      </PaletteContainer>

      <CreateColorPicker />

      <TabSelect
        className={style.tabSelect}
        value={selectedDetail}
        onChange={setSelectedDetail}
      >
        <TabSelect.Option value='info'>Info</TabSelect.Option>
        <TabSelect.Option value='contrast'>Contrast</TabSelect.Option>
        <TabSelect.Option value='shades'>Shades</TabSelect.Option>
      </TabSelect>

      <div className={style.detail}>
        {selectedDetail === 'info' && <ColorInfoList />}
        {selectedDetail === 'contrast' && <ContrastInfoList />}
        {selectedDetail === 'shades' && <ShadeInfoList />}
      </div>
    </div>
  );
}

export default CreateAside;
