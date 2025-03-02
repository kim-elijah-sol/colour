import useModal from '@/stores/useModal';
import ColorPicker from '@/components/ColorPicker';

type OpenColorPickerParams = {
  mouseX: number;
  mouseY: number;
  color: string;
};

function useColorPicker(onChangeColor: (color: string) => void) {
  const { setModal, removeModal } = useModal();

  function openColorPicker({ mouseX, mouseY, color }: OpenColorPickerParams) {
    const { clientWidth } = document.querySelector('body')!;

    const direction = clientWidth / 2 > mouseX ? 'right' : 'left';

    setModal(() => {
      return (
        <ColorPicker
          x={mouseX}
          y={mouseY}
          onChangeColor={(color) => {
            removeModal();
            onChangeColor(color);
          }}
          color={color}
          direction={direction}
        />
      );
    });
  }

  return openColorPicker;
}

export default useColorPicker;
