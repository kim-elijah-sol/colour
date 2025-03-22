import * as style from './Header.css';

function Header() {
  return (
    <header className={style.header}>
      <h1>
        Col<span className={style.logoO}>o</span>
        <span className={style.logoU}>u</span>
        <span className={style.logoR}>r</span>
      </h1>
    </header>
  );
}

export default Header;
