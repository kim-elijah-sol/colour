import useCreatePaletteColors from '@/stores/useCreatePaletteColors';
import ContrastInfo from '../ContrastInfo';
import * as style from './style.css';

function ContrastInfoList() {
  const { selectedIndex, colors } = useCreatePaletteColors();

  const color = colors[selectedIndex];

  return (
    <ul className={style.container}>
      <ContrastInfo foreground='FFFFFF' background={color} />
      <ContrastInfo background='FFFFFF' foreground={color} />
      <ContrastInfo foreground='000000' background={color} />
      <ContrastInfo background='000000' foreground={color} />
    </ul>
  );
}

export default ContrastInfoList;
