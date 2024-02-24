import {
  faBoxOpen,
  faCancel,
  faFastForward,
  faGear,
  faPause,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../styles/videoCard.css";
import YouTube from "react-youtube";
import { Avatar, Menu } from "@mui/material";
import LongMenu from "./menu";

const VideoCard = ({
  thumbnails,
  channelName,
  author,
  description,
  publishTime,
  views,
  title,
  videoLength,
  videoID,
  channelID,
}) => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      // controls: 0,
      // enablejsapi: 1,
    },
  };
  const [isHovered, setHovered] = useState(false);

  const VideoPlayer = () => {
    return (
      <YouTube
        videoId={videoID}
        opts={opts}
        className="youtube-video"
        onReady={(e) => {
          e.target.playVideoAt(0);
        }}
      />
    );
  };
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  // console.log(channelName);

  return (
    <div className="videoCard">
      <div
        className="thumbnail"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? (
          <VideoPlayer />
        ) : (
          <video
            src=""
            poster={thumbnails[0].url}
            autoPlay={false}
            controls={false}
            muted
            loop
          />
        )}
      </div>
      <div className="body box">
        <div className="channelLogo box">
          <Avatar alt={channelName}>
            {" "}
            {channelName ? channelName[0] : "R"}
          </Avatar>
        </div>
        <div className="details box">
          <div className="title box">{title}</div>
          <div className="channelName box">{channelName}</div>
          <div className="views-publishtime box">
            <div className="views box">{views} views</div>
            <span>&#x2022;</span>
            <div className="publishTime box">{publishTime}</div>
          </div>
        </div>
        <div className="menu">
          <LongMenu />
        </div>
      </div>
    </div>

    // <div className="card">
    //   <div className="card__view">
    //     <div className="card__view__data">
    //       <video
    //         autoPlay
    //         controls
    //         poster={thumbnails[0].url || thumbnails[1].url || thumbnails[2].url}
    //       >
    //         <source
    //           src={`https://www.youtube.com/watch?v=${videoID}`}
    //           type="video/mp4"
    //         />
    //       </video>
    //       <p className="card__view__preview">Preview</p>
    //       <p className="card__play__icon">
    //         <svg width="8px" height="8px" viewBox="-0.5 0 7 7" version="1.1">
    //           <g
    //             id="Page-1"
    //             stroke="none"
    //             stroke-width="1"
    //             fill="none"
    //             fill-rule="evenodd"
    //           >
    //             <g
    //               id="Dribbble-Light-Preview"
    //               transform="translate(-347.000000, -3766.000000)"
    //               fill="#000000"
    //             >
    //               <g id="icons" transform="translate(56.000000, 160.000000)">
    //                 <path
    //                   fill="#EAECEE"
    //                   d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"
    //                   id="play-[#1003]"
    //                 ></path>
    //               </g>
    //             </g>
    //           </g>
    //         </svg>
    //       </p>
    //       <p className="card__lenght">{videoLength}</p>
    //     </div>
    //   </div>
    //   <div className="card__content">
    //     <p className="channel__video__name">{title}</p>
    //     <div className="channel__data">
    //       <div className="channel__img"></div>
    //       <div className="channel__data__text">
    //         <p className="channel__name">{channelName}</p>
    //         <div className="channel__subdata">
    //           <p className="channel__views">{views}</p>
    //           <p className="channel__date">{publishTime}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default VideoCard;
