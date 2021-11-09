import React from 'react';
import defaultAvatar from '../../../assets/icons/default-avatar.png';

import { useSelector } from 'react-redux';
import { getAuthUserName } from '../../../redux/auth/auth.selectors';

import './UserInfo.scss';

const UserInfo = () => {
  const UserName = useSelector(getAuthUserName);
  const UserNameFirstLetter = UserName.toUpperCase().slice(0, 1);
  const UserNameCut = UserName.substring(0, UserName.indexOf('@'));

  return (
    <>
      <div className='userInfo'>
        <img src={defaultAvatar} alt='userImg' className='userPic' />
        <p className='userPicLetter'>{UserNameFirstLetter}</p>
        <p className='userNameFull'>{UserNameCut}</p>
      </div>
    </>
  );
};

export default UserInfo;
