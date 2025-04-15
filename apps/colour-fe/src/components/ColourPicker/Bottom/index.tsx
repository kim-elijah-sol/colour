import { PropsWithChildren } from 'react';
import * as style from './style.css';

function Bottom({ children }: PropsWithChildren) {
  return <div className={style.bottom}>{children}</div>;
}

export default Bottom;
