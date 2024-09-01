import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";

const Sidebar = ({
  activeLink,
  handleLinkClick,
  toggleSidebar,
  theme,
  handleThemeSwitch,
}) => {
  const handlesignout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="flex flex-col fixed top-0 right-0 h-dvh w-[300px] bg-zinc-900 text-white font-sans">
      <div className="flex justify-between items-center p-5 border-b border-zinc-700">
        <h1 className="text-lg font-bold">keyNcoders</h1>
        <button
          className="text-zinc-400 hover:text-white"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faXmark} className="text-[30px]" />
        </button>
      </div>
      <ul className="flex flex-grow flex-col p-5 space-y-2">
        <li>
          <Link
            to="/about"
            className={`flex justify-between items-center p-2 hover:bg-zinc-700 rounded ${
              activeLink === 0 ? "bg-zinc-700" : ""
            }`}
          >
            About Us <span>▼</span>
          </Link>
        </li>
        <li>
          <Link
            to="/#courses"
            className={`flex justify-between items-center p-2 hover:bg-zinc-700 rounded ${
              activeLink === 0 ? "bg-zinc-700" : ""
            }`}
            onClick={() => {
              document
                .getElementById("courses")
                .scrollIntoView({ behavior: "smooth" });
              handleLinkClick(); // Update activeLink or any other state
            }}
          >
            Courses <span>▼</span>
          </Link>
        </li>
        <li>
          <Link
            to="/contact-us"
            className={`flex justify-between items-center p-2 hover:bg-zinc-700 rounded ${
              activeLink === 2 ? "bg-zinc-700" : ""
            }`}
          >
            Contact Us <span>▼</span>
          </Link>
        </li>
        <li className="flex flex-row mx-[9px] justify-between ">
          <span>Theme:</span>
          <Toggle toggled={theme === "dark"} onClick={handleThemeSwitch} />
        </li>
      </ul>
      <div className="flex flex-col items-center justify-self-end p-5 border-t border-b border-zinc-700">
        <p className="mb-4">keyncoders@gmail.com</p>
        {/* <p className='mb-4'>+0 (123) 456 78 90</p> */}
        <div className="flex space-x-4">
          <Link
            target="_blank"
            to="https://www.instagram.com/keyncoders?igsh=MTM3MG1vZm05ejlxaA=="
            className="text-zinc-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          {/* <Link
            target="_blank"
            to=""
            className="text-zinc-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link> */}
          <Link
            target="_blank"
            to="https://www.facebook.com/share/tkYX1gKeBNkDYmJU/?mibextid=qi2Omg"
            type="button"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-zinc-400 hover:text-white"
            />
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/company/keyncoders/"
            className="text-zinc-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          {/* <Link
            target="_blank"
            to="#"
            className="text-zinc-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link> */}
        </div>

        {!localStorage.getItem("token") ? (
          <Link to="/login">
            <button className="mt-2 font-medium dark:text-white border-2 border-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white focus:outline-none">
              SignIn
            </button>
          </Link>
        ) : (
          <button
            onClick={handlesignout}
            className="mt-2 font-medium dark:text-white border-2 border-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white focus:outline-none"
          >
            SignOut
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
