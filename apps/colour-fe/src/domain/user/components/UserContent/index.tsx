import { PropsWithChildren } from 'react';
import * as style from './style.css';

function UserContent({ children }: PropsWithChildren) {
  return <main className={style.container}>{children}</main>;
}

export default UserContent;
