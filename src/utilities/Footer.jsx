import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Footer({ theme }) {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return (
    <footer
      className={` ${
        theme === "dark" ? "bg-[#232222] " : "bg-white"
      } text-black dark:text-zinc-600 body-font`}
    >
      <div className="container mx-auto px-5 pt-[15px] ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-black font-bold text-base md:text-lg text-center md:text-left mb-4 md:mb-0">
            <img
              src={
                theme === "dark"
                  ? "../images/logolight.png"
                  : "../images/logo.png"
              }
              alt="Logo"
              className="w-40 h-10"
            />
          </p>
          <span className="inline-flex mt-2 md:mt-0">
            {token ? (
              <Link
                target="_blank"
                to="https://rzp.io/l/y1Eux1i"
                className="text-sm md:text-base text-white px-3 py-1 md:px-4 md:py-2 bg-[#111B47] rounded-lg hover:bg-[#0E1840]"
              >
                Purchase Now
              </Link>
            ) : (
              <Link
                to="/signup"
                className="text-sm md:text-base text-white px-3 py-1 md:px-4 md:py-2 bg-[#111B47] rounded-lg hover:bg-[#0E1840]"
              >
                Purchase Now
              </Link>
            )}
          </span>
        </div>
        <hr className="w-full mt-3 border-0 h-[1px] bg-gray-900 dark:bg-gray-300" />

        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          <p className="text-sm md:text-base text-center md:text-left dark:text-gray-400 mb-3">
            <span className="flex  items-center">
              <span className="dark:text-white md:text-[25px] sm:text-[25px] sm: mr-2 ">
                ©
              </span>
              <span className="dark:text-white">2024 keyNcoders</span>
            </span>
          </p>
          <span className="flex flex-col md:flex-row justify-center items-center md:gap-8 dark:text-gray-400 ">
            <Link
              to="/dsa"
              className="text-base md:text-lg dark:text-white text-black hover:scale-110"
            >
              Product
            </Link>
            <a
              href="https://t.me/keyncoders"
              className="text-base md:text-lg dark:text-white text-black hover:scale-110 "
            >
              Community
            </a>
            <Link
              to="/contact-us"
              className="text-base md:text-lg dark:text-white text-black hover:scale-110 "
            >
              Support
            </Link>
          </span>
          <div className="flex flex-row gap-4 mt-2 md:m-0 md:gap-8">
            <Link
              target="_blank"
              to="https://www.facebook.com/share/tkYX1gKeBNkDYmJU/?mibextid=qi2Omg"
              type="button"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="dark:text-[#B0B8BC] text-black h-5 md:h-6"
              />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/company/keyncoders/"
              type="button"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="dark:text-[#B0B8BC] text-black h-5 md:h-6"
              />
            </Link>
            {/* will add in future */}
            {/* <FontAwesomeIcon
              icon={faTwitter}
              className="dark:text-[#B0B8BC] text-black h-5 md:h-6"
            /> */}
            <Link
              target="_blank"
              to="https://youtube.com/@keyncoders?feature=shared"
              type="button"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="dark:text-[#B0B8BC] text-black h-5 md:h-6"
              />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/keyncoders?igsh=MTM3MG1vZm05ejlxaA=="
              type="button"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="dark:text-[#B0B8BC] text-black h-5 md:h-6"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
