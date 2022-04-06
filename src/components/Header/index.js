import React from 'react';
import cookies from 'js-cookie';

import style from './index.module.scss';

const Header = ({ pageTitle }) => {
  const adminName = cookies.get('admin_name');

  return (
    <div className={style.headerPostition}>
      <div className={style.header}>
        <h3 className={style.pageTitle}>{pageTitle}</h3>
        <div className={style.userInfo}>
          <span className={style.adminName}>{adminName}</span>
          <img
            title="John Doe"
            className={style.profilePic}
            src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
            alt="&nbsp; Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
