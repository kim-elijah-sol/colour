import { Outlet } from 'react-router';
import Main from './Main/Main';
import Header from './Header/Header';

function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;
