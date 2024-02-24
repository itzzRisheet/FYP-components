import React from "react";
import "../styles/header.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchBox from "./searchBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <FontAwesomeIcon icon={faYoutube} className="yt-icon" />
        Youtube
      </div>
      <div className="searchbox">
        <SearchBox />
      </div>
      <div className="right">profile</div>
    </div>
  );
};

export default Header;
