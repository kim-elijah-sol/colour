import { PropsWithChildren } from 'react';
import { paletteContainerStyle } from './style.css';

function PaletteContainer({ children }: PropsWithChildren) {
  return <div className={paletteContainerStyle}>{children}</div>;
}

export default PaletteContainer;
