import { Outlet } from 'react-router';
import UserAside from '../UserAside';
import UserContainer from '../UserContainer';
import UserContent from '../UserContent';
import UserPage from '../UserPage';
import UserTitle from '../UserTitle';

function UserLayout() {
  return (
    <UserContainer>
      <UserTitle />
      <UserPage>
        <UserAside />
        <UserContent>
          <Outlet />
        </UserContent>
      </UserPage>
    </UserContainer>
  );
}

export default UserLayout;
