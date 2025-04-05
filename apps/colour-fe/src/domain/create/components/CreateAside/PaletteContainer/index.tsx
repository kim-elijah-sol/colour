import { PropsWithChildren } from 'react';
import * as style from './style.css';

function PaletteContainer({ children }: PropsWithChildren) {
  return <div className={style.container}>{children}</div>;
}

export default PaletteContainer;
