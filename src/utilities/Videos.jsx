import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "./Navbar";
const Videos = ({ theme, handleThemeSwitch }) => {
  return (
    <div
      className={` w-full h-full ${
        theme === "dark" ? "bg-[#1D1534] " : "bg-white"
      }`}
    >
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <Sidebar />
    </div>
  );
};

export default Videos;
