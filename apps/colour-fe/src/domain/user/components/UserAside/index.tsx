import { Link } from 'react-router';
import * as style from './style.css';

function UserAside() {
  return (
    <nav className={style.container}>
      <Link to='user/account'>Account</Link>
      <Link to='user/profile'>Profile</Link>
      <Link to='user/cancel'>Cancel Account</Link>
    </nav>
  );
}

export default UserAside;
