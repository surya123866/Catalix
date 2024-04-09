import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

import sidebarIcon from "../../assets/sidebar-icon.png";
import logo from "../../assets/catalix-icon.png";

import { GoHome } from "react-icons/go";
import { LuTimer } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";
import { IoRocketOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { MdLibraryBooks } from "react-icons/md";

const menu = [
  { optionName: "Home", icon: <GoHome />, link: "/" },
  { optionName: "Activities", icon: <LuTimer />, link: "/activities" },
  { optionName: "Analytics", icon: <VscGraph />, link: "/analytics" },
  {
    optionName: "Transformation",
    icon: <IoRocketOutline />,
    link: "/transformation",
  },
  { optionName: "Library", icon: <MdLibraryBooks />, link: "/library" },
];

const manage = [
  { optionName: "Settings", icon: <IoSettingsOutline />, link: "/settings" },
  {
    optionName: "Logout",
    icon: <HiOutlineLogout fontSize={20} />,
    link: "/logout",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [login, setLogin] = useState(false);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const toggleSidebar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
      <div onClick={toggleSidebar}>
        <img src={sidebarIcon} alt="Sidebar Icon" />
      </div>
      {isOpen && (
        <>
          <div className="logo-container">
            <img src={logo} alt="Catalix Logo" /> <h1>Catalix</h1>
          </div>
          <ul className="menuOptions">
            {menu.map((item, index) => (
              <li
                key={index}
                className={index === activeIndex ? "active" : ""}
                onClick={() => handleItemClick(index)}
              >
                <Link to={item.link} className="link">
                  {item.icon}
                  <span>{item.optionName}</span>
                </Link>
              </li>
            ))}
          </ul>
          <hr />
          <ul className="manageOptions">
            {isOpen &&
              manage.map((item, index) => (
                <li key={index} className="link">
                  {item.optionName === "Logout" ? (
                    <button
                      onClick={() => setLogin(!login)}
                      style={{
                        backgroundColor: "transparent",
                        outline: "none",
                        color: "#ffff",
                        border: "none",
                        marginRight: "8px",
                      }}
                    >
                      {item.icon}
                      <span style={{ margin: "6px" }}>
                        {login ? item.optionName : "Login"}
                      </span>
                    </button>
                  ) : (
                    <Link to={item.link} className="link">
                      {item.icon}
                      <span>{item.optionName}</span>
                    </Link>
                  )}
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;
