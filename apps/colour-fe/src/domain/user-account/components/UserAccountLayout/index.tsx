import { Outlet } from 'react-router';
import UserAccountAside from '../UserAccountAside';
import UserAccountContainer from '../UserAccountContainer';
import UserAccountContent from '../UserAccountContent';
import UserAccountPage from '../UserAccountPage';
import UserAccountTitle from '../UserAccountTitle';

function UserAccountLayout() {
  return (
    <UserAccountContainer>
      <UserAccountTitle />
      <UserAccountPage>
        <UserAccountAside />
        <UserAccountContent>
          <Outlet />
        </UserAccountContent>
      </UserAccountPage>
    </UserAccountContainer>
  );
}

export default UserAccountLayout;
