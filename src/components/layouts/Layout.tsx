import { Outlet } from 'react-router';
import Aside from './Aside/Aside';
import ContentWrapper from './ContentWrapper/ContentWrapper';
import Header from './Header/Header';
import Main from './Main/Main';

function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Aside />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </Main>
    </>
  );
}

export default Layout;
