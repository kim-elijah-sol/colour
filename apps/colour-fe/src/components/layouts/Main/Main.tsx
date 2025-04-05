import { PropsWithChildren } from 'react';
import { mainStyle } from './Main.css';

function Main({ children }: PropsWithChildren) {
  return <main className={mainStyle}>{children}</main>;
}

export default Main;
