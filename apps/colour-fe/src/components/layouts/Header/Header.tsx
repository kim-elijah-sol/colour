import { useAccessToken } from '@/queries/useAccessToken';
import { Link } from 'react-router';
import SignInButton from '../../SignInButton';
import * as style from './Header.css';
import Profile from './Profile';

function Header() {
  const { data: accessToken } = useAccessToken();

  return (
    <header className={style.header}>
      <h1>
        <Link to='/' className={style.link}>
          Col<span className={style.logoO}>o</span>
          <span className={style.logoU}>u</span>
          <span className={style.logoR}>r</span>
        </Link>
      </h1>
      {accessToken ? <Profile /> : <SignInButton />}
    </header>
  );
}

export default Header;
