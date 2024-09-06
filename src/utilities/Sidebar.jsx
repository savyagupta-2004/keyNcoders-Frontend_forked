import React, { useState, useEffect, useRef } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggle from "./Toggle";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({
  activeLink,
  handleLinkClick,
  toggleSidebar,
  theme,
  handleThemeSwitch,
  isOpen,
}) => {
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false);
  const sidebarRef = useRef(null);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !isClosing
      ) {
        toggleSidebar(); // Use the passed prop function to toggle the sidebar
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isClosing, toggleSidebar]);

  useEffect(() => {
    console.log("closing the sidebar");
    setIsClosing(false);
  }, [isOpen]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 right-0 h-full w-[300px] bg-zinc-900 text-white font-sans transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-5 border-b border-zinc-700 bg-zinc-900">
        <h1 className="text-lg font-bold bg-zinc-900">keyNcoders</h1>
        <button
          className="text-zinc-400 hover:text-white"
          onClick={toggleSidebar} // Close sidebar when button is clicked
        >
          <FontAwesomeIcon icon={faXmark} className="text-[30px]" />
        </button>
      </div>
      <ul className="bg-zinc-900 flex flex-col p-5 space-y-2">
        <li>
          <Link
            to="/about"
            className={`flex justify-between items-center p-2 hover:bg-zinc-700 rounded ${
              activeLink === 0 ? "bg-zinc-700" : ""
            }`}
            onClick={handleLinkClick}
          >
            About Us <span>▼</span>
          </Link>
        </li>
        <li>
          <Link
            to="/#courses"
            className={`flex justify-between items-center p-2 hover:bg-zinc-700 rounded ${
              activeLink === 1 ? "bg-zinc-700" : ""
            }`}
            onClick={() => {
              document
                .getElementById("courses")
                .scrollIntoView({ behavior: "smooth" });
              handleLinkClick();
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
            onClick={handleLinkClick}
          >
            Contact Us <span>▼</span>
          </Link>
        </li>
        <li className="flex flex-row mx-[9px] justify-between ">
          <span>Theme:</span>
          <Toggle toggled={theme === "dark"} onClick={handleThemeSwitch} />
        </li>
      </ul>
      <div className="bg-zinc-900 flex flex-col items-center p-5 border-t border-zinc-700">
        <p className="mb-4">keyncoders@gmail.com</p>
        <div className="bg-zinc-900 flex space-x-4">
          <Link
            target="_blank"
            to="https://www.instagram.com/keyncoders?igsh=MTM3MG1vZm05ejlxaA=="
            className="text-zinc-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            target="_blank"
            to="https://www.facebook.com/share/tkYX1gKeBNkDYmJU/?mibextid=qi2Omg"
            className="text-zinc-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/company/keyncoders/"
            className="text-zinc-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
        {!localStorage.getItem("token") ? (
          <Link to="/login">
            <button className="mt-2 font-medium text-white border-2 border-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white focus:outline-none">
              SignIn
            </button>
          </Link>
        ) : (
          <button
            onClick={handleSignOut}
            className="mt-2 font-medium text-white border-2 border-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white focus:outline-none"
          >
            SignOut
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
