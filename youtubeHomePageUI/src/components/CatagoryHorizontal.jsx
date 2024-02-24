import React, { useRef, useState, useEffect } from "react";
import "../styles/catHori.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faLeftLong,
} from "@fortawesome/free-solid-svg-icons";

const CategoryHorizontal = () => {
  const youtubeCategories = [
    "Music",
    "Gaming",
    "News",
    "Movies",
    "Fashion",
    "Sports",
    "Tech",
    "Cooking",
    "Travel",
    "Fitness",
    "Educational Technology",
    "Science",
    "History",
    "Programming",
    "Mathematics",
    "Language Learning",
    "Art and Design",
    "Psychology",
    "Philosophy",
    "Literature",
    "DIY and Crafts",
    "Health and Wellness",
    "Business and Finance",
    "Productivity",
    "Parenting",
    "Career Development",
    "Photography",
    "Home Improvement",
    "Self-Improvement",
    // Add more categories as needed
  ];

  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleWheel = (event) => {
    if (containerRef.current && isHovered) {
      containerRef.current.scrollLeft += event.deltaY;
      // event.preventDefault();
    }
  };

  useEffect(() => {
    const disableBodyScroll = (event) => {
      if (isHovered) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", disableBodyScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", disableBodyScroll);
    };
  }, [isHovered]);

  return (
    <div className="horizontal-scroll">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={isHovered ? "visible" : "invisible"}
      />

      <div
        className={`scroll-1 ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
        ref={containerRef}
      >
        {youtubeCategories.map((category, index) => {
          return (
            <div key={index} className="cata">
              {category}
            </div>
          );
        })}
      </div>
      <FontAwesomeIcon
        icon={faChevronRight}
        className={isHovered ? "visible" : "invisible"}
      />
    </div>
  );
};

export default CategoryHorizontal;
