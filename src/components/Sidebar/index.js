import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import cookies from "js-cookie";
import Nav from "react-bootstrap/Nav";
import {
  FaChartPie,
  FaTicketAlt,
  FaUserTie,
  FaBook,
  FaClipboardList,
} from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";

import { signOut } from "../../redux/actions/authActions";
import logo from "../../assets/Logo/hanas-logo.png";
import style from "./index.module.scss";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState(
    parseInt(window.localStorage.getItem("active-link")) || 0
  );

  const navigationLinks = [
    {
      name: "Overview",
      path: "/overview",
      icon: <FaChartPie className={style.icon} />,
    },
    {
      name: "Verification",
      path: "/verification-requests",
      icon: <FaTicketAlt className={style.icon} />,
    },
    {
      name: "Certification",
      path: "/certification-requests",
      icon: <FaTicketAlt className={style.icon} />,
    },
    {
      name: "Clients",
      path: "/clients",
      icon: <MdGroups className={style.clientsIcon} />,
    },
    {
      name: "Skilled Workers",
      path: "/skilledworkers",
      icon: <FaUserTie className={style.icon} />,
    },
    {
      name: "Transactions",
      path: "/transactions",
      icon: <FaBook className={style.icon} />,
    },
    {
      name: "User Reports",
      path: "/user-reports",
      icon: <FaClipboardList className={style.icon} />,
    },
  ];

  useEffect(() => {
    window.localStorage.setItem("active-link", activeLink);
  }, [activeLink]);

  const onLogout = () => {
    window.localStorage.removeItem("active-link");
    cookies.remove("access_token");
    cookies.remove("admin_name");
    dispatch(signOut());
  };

  return (
    <div className={style.sidebar}>
      <div className={style.sidebarHeader}>
        <Link to="/overview" onClick={() => setActiveLink(0)}>
          <img src={logo} className={style.logo} alt="Hanas Logo" />
        </Link>
        <h6 className={style.adminText}>Admin</h6>
      </div>
      <Nav
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className={style.nav}
      >
        {navigationLinks.map((link, idx) => {
          return (
            <Nav.Item key={idx}>
              <Link
                to={link.path}
                onClick={() => {
                  setActiveLink(idx);
                }}
                className={
                  activeLink === idx ? style.activeLink : style.navLink
                }
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </Nav.Item>
          );
        })}
      </Nav>
      <div onClick={onLogout} className={style.logout}>
        <BiLogOutCircle />
        <span>Logout</span>
      </div>
    </div>
  );
};
export default Sidebar;
