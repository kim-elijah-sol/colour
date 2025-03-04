import useModal from '@/stores/useModal';
import ColorPicker from '@/components/ColorPicker';
import { delay } from '@/utils/functions';

type OpenColorPickerParams = {
  mouseX: number;
  mouseY: number;
  color: string;
};

function useColorPicker(onChangeColor: (color: string) => void) {
  const { modal, setModal, removeModal } = useModal();

  async function openColorPicker({
    mouseX,
    mouseY,
    color,
  }: OpenColorPickerParams) {
    const { clientWidth } = document.querySelector('body')!;

    const direction = clientWidth / 2 > mouseX ? 'right' : 'left';

    if (modal !== null) {
      removeModal();

      await delay(150);
    }

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
