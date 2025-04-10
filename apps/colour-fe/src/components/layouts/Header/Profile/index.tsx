import { deleteSignOut } from '@/apis/deleteSignOut';
import { useGetMeQuery } from '@/queries/useGetMeQuery';
import { getForegroundColorType } from '@/utils/functions';
import { LogOut, UserRound } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router';
import * as style from './style.css';

function Profile() {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const { data } = useGetMeQuery();

  const color = data ? data.data.profileColour : 'FFFFFF';

  const isForLight = getForegroundColorType(color) === 'black';

  async function handleSignOut(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    deleteSignOut().catch();

    localStorage.removeItem('colour-access-token');
    localStorage.removeItem('colour-refresh-token');

    location.reload();
  }

  return (
    <div className={style.container}>
      <div
        onClick={() => setIsMenuShow(!isMenuShow)}
        style={{
          backgroundColor: `#${color}`,
        }}
        className={style.profile[isForLight ? 'forLight' : 'default']}
      />
      {isMenuShow && (
        <div className={style.menu}>
          <Link className={style.anchor} to='user/account'>
            <UserRound color='#333333' size={16} />
            Account
          </Link>
          <Link className={style.anchor} to='#' onClick={handleSignOut}>
            <LogOut color='#333333' size={16} />
            Sign Out
          </Link>
        </div>
      )}
    </div>
  );
}

export default Profile;
