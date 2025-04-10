import { PropsWithChildren } from 'react';
import * as style from './style.css';

function UserAccountPage({ children }: PropsWithChildren) {
  return <div className={style.userAccountPage}>{children}</div>;
}

export default UserAccountPage;
