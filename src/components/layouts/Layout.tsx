import { Outlet } from 'react-router';
import Aside from './Aside/Aside';
import Header from './Header/Header';
import Main from './Main/Main';

function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Aside />
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;
