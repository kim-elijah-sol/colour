import { PaletteEditor, TopGuideText } from '@/domain/create/components';
import useCreatePalette from '@/domain/create/hooks/useCreatePalette';

function Create() {
  const { colors } = useCreatePalette();

  if (colors.length === 0) return null;

  return (
    <div>
      <TopGuideText />
      <PaletteEditor />
    </div>
  );
}

export default Create;
