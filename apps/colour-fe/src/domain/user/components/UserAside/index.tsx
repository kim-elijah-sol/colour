import { Link, useLocation } from 'react-router';
import * as style from './style.css';

type Anchor = {
  path: string;
  name: string;
};

const ANCHORS: Anchor[] = [
  {
    path: '/user/account',
    name: 'Account',
  },
  {
    path: '/user/profile',
    name: 'Profile',
  },
  {
    path: '/user/cancel',
    name: 'Cancel Account',
  },
];

function UserAside() {
  const { pathname } = useLocation();

  return (
    <nav className={style.container}>
      {ANCHORS.map((it) => {
        const isActive = it.path === pathname;

        return (
          <Link
            to={it.path}
            className={style.anchor[isActive ? 'is' : 'not']}
            key={it.path}
          >
            {it.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default UserAside;
