import React from 'react';
import './Navbar.css';
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ListIcon from "@mui/icons-material/List";
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
     const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." className='input'/>
          <SearchIcon className="icon-item" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon-item" />
            English
          </div>
          <div className="item" onClick={()=>dispatch({type:"TOGGLE"})}>
            <DarkModeIcon className="icon-item" />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon-item" />
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon-item" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className="icon-item" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListIcon className="icon-item" />
          </div>
          <div className="item">
            <img
              src="https://www.kindpng.com/picc/m/22-224232_picture-of-from-avatar-with-no-background-zuko.png"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar