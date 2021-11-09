import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/auth/auth.selectors';

import LogoImg from '../../assets/images/hero_logo.jpg';
import UserInfo from './userInfo/UserInfo';
import UserLogout from './userLogout/UserLogout';

import './Header.scss';

const Header = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <div>
      {isAuth && (
        <header className='header'>
          <div className='header-container'>
            <NavLink to='/home' alt='homepage' className='logoLink'>
              <img src={LogoImg} className='logoImg' alt='hero-logo' />
            </NavLink>

            <div className='userInfo'>
              <UserInfo />
              <UserLogout />
            </div>
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
