// src/components/Login.js
import React, { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AuthContext } from "../authContext";
// import { login } from "../api/Login"; no need to Import the login function

function Login({ theme, notify }) {
  const { setIsAuthenticated } = useContext(AuthContext);
  const imgRef = useRef();
  const passRef = useRef();
  const backendUrl =import.meta.env.VITE_BACKEND_URL; // Change to http

  const [loading, setLoading] = useState(false);

  // const backendUrl = process.env.BACKEND_URL; Replace with your actual API URL

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const showpass = () => {
    if (passRef.current.type === "password") {
      passRef.current.type = "text";
      imgRef.current.src = "../images/Eyecross.webp";
    } else {
      passRef.current.type = "password";
      imgRef.current.src = "../images/Eyeopen.webp";
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();
      // for debugging purpose
      console.log(json);

      if (response.ok) {
        //if success then Save the token and redirect
        //double check auth-token
        localStorage.setItem("token", json.token);
        localStorage.setItem("resetPasswordToken", json.resetPasswordToken);
        console.log(json.user);
        localStorage.setItem("savedUser", JSON.stringify(json.user));

        // Retrieve savedUser from localStorage and parse it back to an object
        setIsAuthenticated(true);
        navigate("/user-postlogin");

        notify("welcome back!");
      } else {
        console.error("Login failed:", json.message);
        notify("Incorrect username or password");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gradient-to-r from-black via-gray-800 to-black text-white"
          : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] text-black"
      } flex items-center justify-center w-full`}
    >
      <div className="bg-white rounded-lg p-8 m-6 flex md:flex-row flex-col-reverse md:px-0 md:pr-10 dark:bg-[#292626]">
        <div className="left max-w-md h-96 w-fit bg-white-300 flex-1 relative">
          <img
            loading="lazy"
            src={
              theme === "dark"
                ? "/images/login_dark.webp"
                : "/images/login.webp"
            }
            alt="Login"
            className="h-[100%] w-fit mt-6 m-auto object-cover rounded-3xl"
          />
        </div>

        <div className="max-w-md w-full flex-1 m-2 bg-white-300">
          <h2 className="text-2xl font-bold mb-6 text-zinc-800">
            <span className="dark:text-white">Account</span>{" "}
            <span className="dark:text-[#F14A16]">Login</span>
          </h2>
          <p className="mb-4 hidden md:block text-zinc-600 dark:text-[#A4A4A4]">
            If you are already a member you can login with your email address
            and password.
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-zinc-700 dark:text-[#A4A4A4]"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-md dark:bg-[#292626]"
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-zinc-700 dark:text-[#A4A4A4]"
              >
                Password
              </label>
              <input
                ref={passRef}
                type="password"
                id="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="relative w-full px-3 py-2 border border-zinc-300 rounded-md dark:bg-[#292626]"
              />
              <span
                className="absolute inset-y-0 mt-6 flex items-center right-1 cursor-pointer"
                onClick={showpass}
              >
                <img
                  ref={imgRef}
                  width={24}
                  src="../images/Eyeopen.webp"
                  alt="Eye"
                />
              </span>
            </div>
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2"
              />
              <label
                htmlFor="remember"
                className="text-zinc-700 dark:text-[#A4A4A4]"
              >
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full ${
                theme === "dark"
                  ? "dark:bg-orange-600 dark:hover:bg-gray-600"
                  : ""
              }`}
              disabled={loading}
            >
              {loading ? <Spinner /> : "Login now"}
            </button>
            <div className="flex justify-between">
              <div className="mt-4 text-center text-zinc-600 dark:text-[#A4A4A4]">
                <Link
                  to={"/signup"}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Sign up here
                </Link>
              </div>
              <div className="mt-4 text-center text-zinc-600 dark:text-[#A4A4A4]">
                <Link
                  to={"/forgotPass"}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
