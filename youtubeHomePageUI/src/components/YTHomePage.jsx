import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../styles/ythome.css";
import CatagoryHorizontal from "./CatagoryHorizontal";
import VideosList from "./VideosList";

const YTHomePage = () => {
  return (
    <div className="ytHome">
      <div className="head">
        <Header />
      </div>
      <div className="content">
        <Sidebar />
        <div className="yt-browse">
          <CatagoryHorizontal />
          <VideosList />
        </div>
      </div>
    </div>
  );
};

export default YTHomePage;
