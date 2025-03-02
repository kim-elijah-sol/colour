import useForegroundColorType from '../../hooks/useForegroundColorType';
import { Info, Contrast, Table } from 'lucide-react';
import {
  backgroundBarStyle,
  colorChangeButtonStyle,
  toolBarStyle,
  toolButtonStyle,
  whiteColorChangeButtonStyle,
  whiteToolButtonStyle,
} from './style.css';
import { useMemo } from 'react';
import useHandleClickInfo from '../../hooks/useHandleClickInfo';
import useHandleClickContrast from '../../hooks/useHandleClickContrast';
import useHandleClickShade from '../../hooks/useHandleClickShade';
import useColorPicker from '@/hooks/useColorPicker';

type Props = {
  color: string;
  onChangeColor: (color: string) => void;
};

function PaletteEditorColorItem({ color, onChangeColor }: Props) {
  const foregroundColorType = useForegroundColorType(color);

  const handleClickInfo = useHandleClickInfo(color);

  const handleClickContrast = useHandleClickContrast(color);

  const handleClickShade = useHandleClickShade(color, onChangeColor);

  const handleClickColorPicker = useColorPicker(onChangeColor);

  const propsByForegroundColorType = useMemo(() => {
    return {
      colorChangeButton: {
        className:
          foregroundColorType === 'white'
            ? whiteColorChangeButtonStyle
            : colorChangeButtonStyle,
      },
      toolButton: {
        className:
          foregroundColorType === 'white'
            ? whiteToolButtonStyle
            : toolButtonStyle,
      },
      icons: {
        size: 24,
        color: foregroundColorType === 'white' ? '#FFFFFF' : '#333333',
      },
    };
  }, [foregroundColorType]);

  return (
    <div style={{ background: `#${color}` }} className={backgroundBarStyle}>
      <button
        {...propsByForegroundColorType.colorChangeButton}
        onClick={(e) =>
          handleClickColorPicker({
            mouseX: e.pageX,
            mouseY: e.pageY,
            color
          })
        }
      >
        {color.toUpperCase()}
      </button>

      <div className={toolBarStyle}>
        <button
          {...propsByForegroundColorType.toolButton}
          onClick={handleClickInfo}
        >
          <Info {...propsByForegroundColorType.icons} />
        </button>
        <button
          {...propsByForegroundColorType.toolButton}
          onClick={handleClickContrast}
        >
          <Contrast {...propsByForegroundColorType.icons} />
        </button>
        <button
          {...propsByForegroundColorType.toolButton}
          onClick={handleClickShade}
        >
          <Table {...propsByForegroundColorType.icons} />
        </button>
      </div>
    </div>
  );
}

export default PaletteEditorColorItem;
