import useForegroundColorType from '../../hooks/useForegroundColorType';
import { Info, Contrast } from 'lucide-react';
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

type Props = {
  color: string;
  onChangeColor: (color: string) => void;
};

function PaletteEditorColorItem({ color, onChangeColor }: Props) {
  const foregroundColorType = useForegroundColorType(color);

  const handleClickInfo = useHandleClickInfo(color);

  const handleClickContrast = useHandleClickContrast(color);

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
      <button {...propsByForegroundColorType.colorChangeButton}>
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
      </div>
    </div>
  );
}

export default PaletteEditorColorItem;
