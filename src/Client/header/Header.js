import React from 'react';

import { useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/auth/auth.selectors';

import UserInfo from './userInfo/UserInfo';
import UserLogout from './userLogout/UserLogout';

import './Header.scss';

const Header = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <div className='Header-main-container'>
      {isAuth && (
        <div className='header'>
          <div className='header-container'>
            <div className='userInfo'>
              <UserInfo />
              <UserLogout />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
