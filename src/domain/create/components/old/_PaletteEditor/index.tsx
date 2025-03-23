import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import PaletteEditorColorItem from '../_PaletteEditorColorItem';
import { paletteEditorContainer } from './style.css';

function PaletteEditor() {
  const { colors, setColor } = useCreatePaletteColors();

  return (
    <div className={paletteEditorContainer}>
      {colors.map((it, index) => (
        <PaletteEditorColorItem
          color={it}
          key={index}
          onChangeColor={(color) => setColor(index, color)}
        />
      ))}
    </div>
  );
}

export default PaletteEditor;
