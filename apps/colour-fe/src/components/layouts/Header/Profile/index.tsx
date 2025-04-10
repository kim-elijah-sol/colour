import { deleteSignOut } from '@/apis/deleteSignOut';
import { useGetMeQuery } from '@/queries/useGetMeQuery';
import { getForegroundColorType } from '@/utils/functions';
import classNames from 'classnames';
import { LogOut, UserRound } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router';
import * as style from './style.css';

function Profile() {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const [isFadeOut, setIsFadeOut] = useState(false);

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

  function handleClickProfile() {
    isMenuShow ? close() : setIsMenuShow(true);
  }

  function close() {
    setIsFadeOut(true);

    setTimeout(() => {
      setIsMenuShow(false);
      setIsFadeOut(false);
    }, 220);
  }

  return (
    <div className={style.container}>
      <div
        onClick={handleClickProfile}
        style={{
          backgroundColor: `#${color}`,
        }}
        className={style.profile[isForLight ? 'forLight' : 'default']}
      />
      {isMenuShow && (
        <div
          className={classNames(
            style.menu,
            isFadeOut ? style.menuFadeOut : undefined
          )}
        >
          <Link className={style.anchor} to='user/account' onClick={close}>
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
