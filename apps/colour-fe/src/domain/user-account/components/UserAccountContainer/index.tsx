import { PropsWithChildren } from 'react';
import * as style from './style.css';

function UserAccountContainer({ children }: PropsWithChildren) {
  return <div className={style.userAccountContainer}>{children}</div>;
}

export default UserAccountContainer;
