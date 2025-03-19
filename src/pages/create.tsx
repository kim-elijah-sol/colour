import {
  CreateContainer,
  CreateCTAButton,
  PaletteEditor,
  TopGuideText,
} from '@/domain/create/components';
import useCreatePalette from '@/domain/create/hooks/useCreatePalette';

function Create() {
  const { colors } = useCreatePalette();

  if (colors.length === 0) return null;

  return (
    <CreateContainer>
      <TopGuideText />
      <PaletteEditor />
      <CreateCTAButton />
    </CreateContainer>
  );
}

export default Create;
