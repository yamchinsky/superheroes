import React from "react";
import defaultAvatar from "../../../assets/icons/default-avatar.png";

import { useSelector } from "react-redux";
import { getAuthUserName } from "../../../redux/auth/auth.selectors";

import styles from "./UserInfo.module.scss";

const UserInfo = () => {
  const UserName = useSelector(getAuthUserName);
  const UserNameFirstLetter = UserName.toUpperCase().slice(0, 1);
  const UserNameCut = UserName.substring(0, UserName.indexOf("@"));

  return (
    <>
      <div className={styles.userPage}>
        <div className={styles.userInfo}>
          <img src={defaultAvatar} alt="userImg" className={styles.userPic} />
          <p className={styles.userPicLetter}>{UserNameFirstLetter}</p>
          <p className={styles.userNameFull}>{UserNameCut}</p>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
