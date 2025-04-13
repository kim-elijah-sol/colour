import useCreatePaletteColours from '@/stores/useCreatePaletteColours';
import ContrastInfo from '../ContrastInfo';
import * as style from './style.css';

function ContrastInfoList() {
  const { selectedIndex, colours } = useCreatePaletteColours();

  const colour = colours[selectedIndex];

  return (
    <ul className={style.container}>
      <ContrastInfo foreground='FFFFFF' background={colour} />
      <ContrastInfo background='FFFFFF' foreground={colour} />
      <ContrastInfo foreground='000000' background={colour} />
      <ContrastInfo background='000000' foreground={colour} />
    </ul>
  );
}

export default ContrastInfoList;
