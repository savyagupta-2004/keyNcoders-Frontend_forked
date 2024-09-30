import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Toggle from "./Toggle"; // Import the Toggle component
import Sidebar from "./Sidebar";

const Navbar = ({ theme, handleThemeSwitch }) => {
  const [activeLink, setActiveLink] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navRef = useRef(null);
  let navigate = useNavigate();

  const handleLinkClick = () => {
    setIsSidebarOpen(false); // Close the sidebar after clicking a link
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle the sidebar state
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Search for:", searchQuery);
  };

  return (
    <nav
      ref={navRef}
      className="fixed z-[9999] top-0 flex flex-col small:flex-row justify-between items-center backdrop-blur-md h-auto small:h-16 px-8 my-2 mt-0 w-full bg-[#E6E6E6] dark:bg-[#232222]"
    >
      <div className="flex items-center justify-between w-full small:w-auto">
        {/* Search Form on the Left */}
        <form onSubmit={handleSearch} className="flex items-center mr-4"></form>

        <span className="flex items-center gap-2">
          <Link to="/user-postlogin">
            <img
              src={
                theme === "light"
                  ? "/images/logo.webp"
                  : "/images/logolight.webp"
              }
              alt=""
              className="w-40 h-10"
            />
          </Link>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="p-2 rounded-3xl text-black  border-[3px] border-black"
          />
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
              About Us
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
                handleLinkClick();
              }}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/pricing-and-plans"
              className={`font-medium dark:text-white ${
                activeLink === 2
                  ? "text-orange-600 underline decoration-2 decoration-orange-400 underline-offset-8"
                  : ""
              } hover:text-orange-600`}
              onClick={handleLinkClick}
            >
              Pricing & Plans
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className={`font-medium dark:text-white ${
                activeLink === 3
                  ? "text-orange-600 underline decoration-2 decoration-orange-400 underline-offset-8"
                  : ""
              } hover:text-orange-600`}
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {!localStorage.getItem("token") ? (
          <Link to="/login">
            <button className="font-medium dark:text-white border-2 border-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white focus:outline-none">
              Sign In
            </button>
          </Link>
        ) : (
          <button
            onClick={handleSignOut}
            className="font-medium dark:text-white border-2 border-orange-500 rounded-lg px-4 py-2 hover:bg-orange-500 hover:text-white focus:outline-none"
          >
            Sign Out
          </button>
        )}
      </span>

      <Sidebar
        isOpen={isSidebarOpen}
        activeLink={activeLink}
        handleLinkClick={handleLinkClick}
        toggleSidebar={toggleSidebar}
        theme={theme}
        handleThemeSwitch={handleThemeSwitch}
      />
    </nav>
  );
};

export default Navbar;
