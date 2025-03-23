import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { useState } from 'react';
import PaletteColorButton from './PaletteColorButton';
import PaletteContainer from './PaletteContainer';
import * as style from './style.css';

function CreateAside() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { colors } = useCreatePaletteColors();

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
    </div>
  );
}

export default CreateAside;
