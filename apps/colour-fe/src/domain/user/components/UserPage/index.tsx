import { PropsWithChildren } from 'react';
import * as style from './style.css';

function UserPage({ children }: PropsWithChildren) {
  return <div className={style.userPage}>{children}</div>;
}

export default UserPage;
