import notificationIcon from "../../assets/notification.png";
import messageIcon from "../../assets/messaging.png";
import avatarIcon from "../../assets/avatar.png";
import settingsIcon from "../../assets/settings.png";
import leadingIcon from "../../assets/leading-icon.png";
import trailingIcon from "../../assets/trailing-icon.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="inputContainer">
        <img src={leadingIcon} alt="leadingIcon" />
        <input
          className="searchInput"
          type="text"
          placeholder="Search by profile, setting, artifact etc..."
        />
        <img src={trailingIcon} alt="loadingIcon" />
      </div>
      <div className="menuIconsContainer">
        <img src={notificationIcon} alt="notificationIcon" />
        <img src={messageIcon} alt="messageIcon" />
        <img src={settingsIcon} alt="settingsIcon" />
        <img src={avatarIcon} alt="avatarIcon" />
      </div>
    </div>
  );
};

export default Header;
