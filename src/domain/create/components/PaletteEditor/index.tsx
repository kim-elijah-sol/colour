import useCreatePalette from '../../hooks/useCreatePalette';
import PaletteEditorColorItem from '../PaletteEditorColorItem';
import { paletteEditorContainer } from './style.css';

function PaletteEditor() {
  const { colors, setColor } = useCreatePalette();

  return (
    <div className={paletteEditorContainer}>
      {colors.map((it, index) => (
        <PaletteEditorColorItem color={it} key={index} onChangeColor={color => setColor(index, color)} />
      ))}
    </div>
  );
}

export default PaletteEditor;
