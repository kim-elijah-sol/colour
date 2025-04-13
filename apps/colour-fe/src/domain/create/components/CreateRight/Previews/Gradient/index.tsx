import useCreatePaletteColours from '@/stores/useCreatePaletteColours';
import { hexToRgb } from '@colour/fx';
import * as style from './style.css';

function Gradient() {
  const { colours } = useCreatePaletteColours();

  const alphaZeroColours = colours.map(
    (it) => `rgba(${hexToRgb(it).join(', ')}, 0)`
  );

  return (
    <div
      className={style.container}
      style={{
        background: `
            linear-gradient(135deg, #${colours[0]}, ${alphaZeroColours[0]} 60.71%),
            linear-gradient(225deg, #${colours[1]}, ${alphaZeroColours[1]} 60.71%),
            linear-gradient(315deg, #${colours[2]}, ${alphaZeroColours[2]} 60.71%),
            linear-gradient(45deg,  #${colours[3]}, ${alphaZeroColours[3]} 60.71%)`,
      }}
    ></div>
  );
}

export default Gradient;
