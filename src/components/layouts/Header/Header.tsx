import { Link } from 'react-router';
import * as style from './Header.css';

function Header() {
  return (
    <header className={style.header}>
      <h1>
        <Link to='/' className={style.link}>
          Col<span className={style.logoO}>o</span>
          <span className={style.logoU}>u</span>
          <span className={style.logoR}>r</span>
        </Link>
      </h1>
    </header>
  );
}

export default Header;
