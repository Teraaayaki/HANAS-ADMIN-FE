import React from 'react';

import style from './index.module.scss';

const Header = ({ pageTitle }) => {
  return (
    <div className={style.headerPostition}>
      <div className={style.header}>
        <h3 className={style.pageTitle}>{pageTitle}</h3>
        <div className={style.userInfo}>
          <span className={style.adminName}>John Doe</span>
          <img
            className={style.profilePic}
            src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
            alt="Profile Pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
