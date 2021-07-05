import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const handleSignOut = () => {
    history.push("/");
  };
  return (
    <div className="header">
      <div className="header__left">
        <a>JobPortal</a>
      </div>
      <div className="header__right">
        <div className="header__right--icon">
          <HomeIcon />
          <span>Home</span>
        </div>
        <div className="header__right--icon">
          <QuestionAnswerIcon />
          <span>Messages</span>
        </div>
        <div className="header__right--icon">
          <NotificationsIcon />
          <span>Notifications</span>
        </div>
        <div className="header__right--icon">
          <AccountCircleIcon />
          <span>Profile</span>
        </div>
        <div className="header__right--icon" onClick={handleSignOut}>
          <ExitToAppIcon />
          <span>Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
