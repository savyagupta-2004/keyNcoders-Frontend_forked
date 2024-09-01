import React from "react";
import PostloginNavbar from "../utilities/PostloginNavbar";

const UserProfile = ({ theme, handleThemeSwitch }) => {
  return (
    <div
      className={`flex flex-col w-full h-full overflow-x-hidden ${
        theme === "dark"
          ? "bg-[#131313] text-white"
          : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] text-black"
      }`}
    >
      <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      Profile
    </div>
  );
};

export default UserProfile;
