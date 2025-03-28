import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import { hexToRgb } from '@/utils/functions';
import * as style from './style.css';

function Gradient() {
  const { colors } = useCreatePaletteColors();

  const alphaZeroColors = colors.map(
    (it) => `rgba(${hexToRgb(it).join(', ')}, 0)`
  );

  return (
    <div
      className={style.container}
      style={{
        background: `
            linear-gradient(135deg, #${colors[0]}, ${alphaZeroColors[0]} 60.71%),
            linear-gradient(225deg, #${colors[1]}, ${alphaZeroColors[1]} 60.71%),
            linear-gradient(315deg, #${colors[2]}, ${alphaZeroColors[2]} 60.71%),
            linear-gradient(45deg,  #${colors[3]}, ${alphaZeroColors[3]} 60.71%)`,
      }}
    ></div>
  );
}

export default Gradient;
