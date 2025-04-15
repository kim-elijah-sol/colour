import { deleteSignOut } from '@/apis/deleteSignOut';
import Avatar from '@/components/Avatar';
import { useGetMeQuery } from '@/queries/useGetMeQuery';
import classNames from 'classnames';
import { LogOut, Palette, UserRound } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import * as style from './style.css';

function Profile() {
  const $menu = useRef<HTMLDivElement | null>(null);

  const [isMenuShow, setIsMenuShow] = useState(false);

  const [isFadeOut, setIsFadeOut] = useState(false);

  const { data } = useGetMeQuery();

  const colour = data ? data.data.profileColour : 'FFFFFF';

  const nickname = data?.data.nickname ?? '';

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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!$menu.current?.contains(event.target as Node) && isMenuShow) {
        close();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuShow]);

  return (
    <div className={style.container}>
      <Avatar
        colour={colour}
        nickname={nickname}
        onClick={handleClickProfile}
      />
      {isMenuShow && (
        <div
          ref={$menu}
          className={classNames(
            style.menu,
            isFadeOut ? style.menuFadeOut : undefined
          )}
        >
          <Link className={style.anchor} to='studio' onClick={close}>
            <Palette color='#333333' size={16} />
            Studio
          </Link>
          <Link className={style.anchor} to='user/account' onClick={close}>
            <UserRound color='#333333' size={16} />
            User
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
