import { headerStyle, headerInnerWrapperStyle } from './Header.css';

function Header() {
  return (
    <header className={headerStyle}>
      <div className={headerInnerWrapperStyle}></div>
    </header>
  );
}

export default Header;
