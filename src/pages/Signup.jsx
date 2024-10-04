// src/components/Signup.js
import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import zxcvbn from "zxcvbn";
import { register } from "../api/SignUp"; // Import the register function
import Spinner from "../components/Spinner";

function Signup({ theme, notify }) {
  const imgRef = useRef();
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const passRef = useRef();
  const confirmPassRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const backendUrl = "http://localhost:5000";
  // const backendUrl = "https://keyncoders-main-backend.vercel.app";
  const navigate = useNavigate();

  const handleOtpChange = (element, index) => {
    if (/^\d$/.test(element.value) || element.value === "") {
      const newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);

      // Focus on the next input
      if (element.value !== "" && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleOtpKeyDown = (event, index) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      // Focus on the previous input
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await fetch(
        `${backendUrl}/auth/email_verification-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, otp: otp.join("") }), // Join OTP array to string
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        // throw new Error(errorData.error || "Invalid OTP");
        console.log(errorData);
        notify("Invalid otp");
      } else {
        notify("OTP verified successfully");
        handleSignup();
      }
    } catch (error) {
      notify("Invalid credentials", error);
      console.log("Invalid credentials", error);
    } finally {
      setLoading(false);
    }
  };

  const checkPasswordStrength = (password) => {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const isValidLength = password.length >= 6;
    return hasLetters && hasNumbers && isValidLength;
  };

  const showPass = () => {
    if (passRef.current.type === "password") {
      passRef.current.type = "text";
      imgRef.current.src = "../images/Eyecross.webp";
    } else {
      passRef.current.type = "password";
      imgRef.current.src = "../images/Eyeopen.webp";
    }
  };

  const handleSignup = async (e) => {
    // e.preventDefault();
    setLoading(true);
    if (!checkPasswordStrength(password)) {
      return;
    }
    if (password !== confirmPassword) {
      notify("Passwords do not match");
      setLoading(false);
      return;
    }
    try {
      const response = await fetch(`${backendUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const json = await response.json();
        localStorage.setItem("token", json.authtoken);
        localStorage.setItem("userdetails", json.savedUser);
        localStorage.setItem("resetPasswordToken", json.resetPasswordToken);
        navigate("/login");
      } else {
        const savedUser = localStorage.getItem("savedUser");
        if (savedUser) {
          notify("Email already exists");
        } else {
          notify("Invalid details");
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignupForStep1 = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!checkPasswordStrength(password)) {
      return;
    }

    if (password !== confirmPassword) {
      notify("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/auth/email_verification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Try to parse JSON
        // const json = await response.json();
        setStep(2);
        notify(
          "Kindly verify your email inorder to complete registration process."
        );
      } else {
        // Handle non-JSON responses
        const errorMessage = await response.text(); // Get response as plain text
        if (errorMessage.includes("No account")) {
          notify("No account found with this email");
        } else {
          notify("Account already exists");
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
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
      <div className="bg-white rounded-lg p-8 m-6 gap-20 flex md:flex-row flex-col-reverse md:px-10 dark:bg-[#292626]">
        <div className="left max-w-md h-96 w-fit bg-white-300 flex-1 relative">
          <img
            loading="lazy"
            src={"/images/signup.webp"}
            alt="SignUp"
            className="h-[100%] w-fit mt-6 m-auto object-cover rounded-3xl"
          />
        </div>

        <div className="max-w-md w-full flex-1 m-2 bg-white-300 ">
          <h2 className="text-2xl font-bold mb-6 text-zinc-800">
            <span className="dark:text-white">Account</span>{" "}
            <span className="dark:text-[#F14A16]">SignUp</span>
          </h2>

          {step === 1 && (
            <form onSubmit={handleSignupForStep1}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-zinc-700 dark:text-[#A4A4A4]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-zinc-300 focus:border-orange-400 rounded-md dark:bg-[#292626]"
                />
              </div>
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
                  className="w-full px-3 py-2 border border-zinc-300 group-focus:border-orange-500 rounded-md dark:bg-[#292626]"
                />
              </div>
              <div className="mb-2 relative">
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
                  className={`py-2 w-full px-3 border border-zinc-300 rounded-md dark:bg-[#292626] ${
                    password && !checkPasswordStrength(password)
                      ? "border-red-500"
                      : ""
                  }`}
                />
                <span
                  className="absolute inset-y-4 mt-5 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={showPass}
                >
                  <img
                    ref={imgRef}
                    width={24}
                    src="../images/Eyeopen.webp"
                    alt="Eye"
                  />
                </span>
              </div>

              {password ? (
                !checkPasswordStrength(password) && (
                  <p className="text-red-500 text-xs">
                    Password must contain letters & numbers
                  </p>
                )
              ) : (
                <p className="text-yellow-500 text-xs">
                  Please enter a password
                </p>
              )}
              <div className="mt-2 mb-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-zinc-700 dark:text-[#A4A4A4] text-[15px]"
                >
                  Confirm Password
                </label>
                <input
                  ref={confirmPassRef}
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="py-2 w-full px-3 border border-zinc-300 rounded-md dark:bg-[#292626]"
                />
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-red-500 text-xs">Passwords do not match</p>
                )}
              </div>
              <button
                disabled={loading}
                type="submit"
                className="mt-2 w-full text-white bg-orange-600  hover:bg-orange-800  dark:text-[#181717] font-bold py-2 px-4 rounded-md"
              >
                {loading ? <Spinner /> : "Sign Up"}
              </button>
              <p className="mt-4 text-center text-zinc-600 dark:text-[#A4A4A4]">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Login here
                </Link>
              </p>
            </form>
          )}

          {step === 2 && (
            <form
              onSubmit={handleVerifyOtp}
              className="w-full max-w-md mx-auto"
            >
              <div className="mt-20 flex flex-col justify-center items-center space-y-4 mb-6">
                <h1 className="text-[16px]  text-center">
                  Enter the OTP sent to <strong>{email}</strong>
                </h1>

                <div className="flex space-x-2">
                  {otp.map((data, index) => (
                    <input
                      key={index}
                      type="text"
                      className="w-12 h-12 text-center border border-gray-300 rounded-lg text-xl text-black focus:ring-2 focus:ring-orange-500"
                      maxLength="1"
                      value={otp[index]}
                      onChange={(e) => handleOtpChange(e.target, index)}
                      onKeyDown={(e) => handleOtpKeyDown(e, index)}
                      ref={(el) => (inputsRef.current[index] = el)}
                    />
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="relative w-full py-3 bg-orange-600 font-bold rounded-lg hover:bg-orange-700 text-white text-center"
                disabled={loading}
              >
                {loading && (
                  <Spinner className="absolute inset-0 m-auto w-6 h-6" />
                )}
                {!loading && "Verify OTP"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
