import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/auth/auth.selectors';

import LogoImg from '../../assets/images/hero_logo.jpg';
import UserInfo from './userInfo/UserInfo';
import UserLogout from './userLogout/UserLogout';

import styles from './Header.module.scss';

const Header = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <div>
      {isAuth && (
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <Link to='/' alt='authpage' className={styles.logoLink}>
              <img src={LogoImg} className={styles.logoImg} alt='Hero-logo' />
            </Link>

            <div className={styles.userInfo}>
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
