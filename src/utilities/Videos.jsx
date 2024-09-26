import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "./Navbar";
import PostloginNavbar from "./PostloginNavbar";
const Videos = ({ theme, handleThemeSwitch }) => {
  return (
    <div
      className={` w-full h-full ${
        theme === "dark" ? "bg-[#1D1534] " : "bg-white"
      }`}
    >
      <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <Sidebar />
    </div>
  );
};

export default Videos;
