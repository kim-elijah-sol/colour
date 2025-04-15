import ColourPicker from '@/components/ColourPicker';
import { TabSelect } from '@/components/inputs';
import useCreatePaletteColours from '@/stores/useCreatePaletteColours';
import { useState } from 'react';
import ColourInfoList from './ColourInfoList';
import ContrastInfoList from './ContrastInfoList';
import PaletteColourButton from './PaletteColourButton';
import PaletteContainer from './PaletteContainer';
import ShadeInfoList from './ShadeInfoList';
import * as style from './style.css';

function CreateAside() {
  const [selectedDetail, setSelectedDetail] = useState<string>('info');

  const { selectedIndex, setSelectedIndex, colours, setColour } =
    useCreatePaletteColours();

  function handleClickPaletteColour(index: number) {
    setSelectedIndex(index);

    const colour = colours[index];

    const event = new CustomEvent('changeColour', { detail: { colour } });
    window.dispatchEvent(event);
  }

  return (
    <div className={style.aside}>
      <PaletteContainer>
        {colours.map((colour, index) => (
          <PaletteColourButton
            colour={colour}
            isSelected={index === selectedIndex}
            onClick={() => handleClickPaletteColour(index)}
            key={colour}
          />
        ))}
      </PaletteContainer>

      <ColourPicker
      containerProps={{ className: style.colourPickerContainer}}
        colour={colours[selectedIndex]}
        setColour={(colour) => setColour(selectedIndex, colour)}
      />

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
        {selectedDetail === 'info' && <ColourInfoList />}
        {selectedDetail === 'contrast' && <ContrastInfoList />}
        {selectedDetail === 'shades' && <ShadeInfoList />}
      </div>
    </div>
  );
}

export default CreateAside;
