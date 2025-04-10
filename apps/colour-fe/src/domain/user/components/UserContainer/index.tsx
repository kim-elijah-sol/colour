import { PropsWithChildren } from 'react';
import * as style from './style.css';

function UserContainer({ children }: PropsWithChildren) {
  return <div className={style.userContainer}>{children}</div>;
}

export default UserContainer;
