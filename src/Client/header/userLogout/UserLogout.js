import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import ModalWindow from '../../../shared/components/modalWindow/ModalWindow';
import { logOut } from '../../../redux/auth/auth.operations';
import { ReactComponent as LogoutSvg } from '../../../assets/icons/logout.svg';
import './UserLogout.scss';

const UserLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = e => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <button type='button' className='logoutBtn' onClick={toggleModal}>
        <LogoutSvg className='logoutSvg' />
        <p className='logoutText'>Выйти</p>
      </button>
      {isModalOpen && (
        <ModalWindow
          text={'Вы действительно хотите выйти?'}
          onCancel={toggleModal}
          onSubmit={handleLogout}
        />
      )}
    </>
  );
};

export default UserLogout;
