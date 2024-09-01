import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Toggle from "./Toggle"; // Import the Toggle component
import Sidebar from "./Sidebar";

const Navbar = ({ theme, handleThemeSwitch }) => {
  const [activeLink, setActiveLink] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  let navigate = useNavigate();

  useEffect(() => {
    // Set the active link based on the current path
    switch (location.pathname) {
      case "/about":
        setActiveLink(0);
        break;
      case "/#courses":
        setActiveLink(1);
        break;
      case "/contact-us":
        setActiveLink(2);
        break;
      default:
        setActiveLink(null);
    }
  }, [location.pathname]);

  useEffect(() => {
    // Close sidebar when clicking outside
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleLinkClick = () => {
    setIsSidebarOpen(false); // Close the sidebar after clicking a link
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlesignout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <nav
      ref={navRef}
      className="fixed z-[9999] flex flex-col small:flex-row justify-between items-center backdrop-blur-md h-auto small:h-16 px-8 my-2 mt-0 w-full bg-[#E6E6E6] dark:bg-[#232222]"
    >
      <div className="flex items-center justify-between w-full small:w-auto">
        <span className="flex items-center gap-2">
          <Link to="/">
            <img
              src={
                theme === "light" ? "/images/logo.png" : "/images/logolight.png"
              }
              alt=""
              className="w-40 h-10"
            />
          </Link>
        </span>
        <span className="small:hidden" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-[30px]" />
          )}
        </span>
      </div>
      <span className="hidden small:flex items-center gap-10">
        <ul className="flex gap-7">
          <li>
            <Link
              to="/about"
              className={`font-medium dark:text-white ${
                activeLink === 0
                  ? "text-orange-600 underline decoration-2 decoration-orange-400 underline-offset-8"
                  : ""
              } hover:text-orange-600`}
              onClick={handleLinkClick}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/#courses"
              className={`font-medium dark:text-white ${
                activeLink === 1
                  ? "text-orange-600 underline decoration-2 decoration-orange-400 underline-offset-8"
                  : ""
              } hover:text-orange-600`}
              onClick={() => {
                document
                  .getElementById("courses")
                  .scrollIntoView({ behavior: "smooth" });
                handleLinkClick(); // Update activeLink or any other state
              }}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className={`font-medium dark:text-white ${
                activeLink === 2
                  ? "text-orange-600 underline decoration-2 decoration-orange-400 underline-offset-8"
                  : ""
              } hover:text-orange-600`}
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Replace theme switch button with Toggle component */}
        <Toggle toggled={theme === "dark"} onClick={handleThemeSwitch} />
        {!localStorage.getItem("token") ? (
          <Link to="/login">
            <button className="font-medium dark:text-white border-2 border-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white focus:outline-none">
              SignIn
            </button>
          </Link>
        ) : (
          <button
            onClick={handlesignout}
            className="font-medium dark:text-white border-2 border-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white focus:outline-none"
          >
            SignOut
          </button>
        )}
      </span>
      {isSidebarOpen && (
        <Sidebar
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
          toggleSidebar={toggleSidebar}
          theme={theme}
          handleThemeSwitch={handleThemeSwitch}
        />
      )}
    </nav>
  );
};

export default Navbar;
