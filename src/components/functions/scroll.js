import React from "react";

const scroll = (setShowTopBar) => {
  const handleScroll = () => {
    const position = window.scrollY;
    if (position >= 2) {
      return setShowTopBar(true);
    }
    return setShowTopBar(false);
  };
  handleScroll();
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

export default scroll;
