import React, { useState, useRef } from "react";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill("")); // Changed to array for OTP
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URL = "https://keyncoders-main-backend.vercel.app"; // Replace with your actual API URL
  const navigate = useNavigate();
  const inputsRef = useRef([]); // Ref to manage focus

  const clearMessage = () => {
    setMessage("");
    setMessageType("");
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    clearMessage();
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send OTP");
      } else {
        setMessage("OTP sent to your email. Please check your inbox.");
        setMessageType("success");
        setStep(2); // Move to the next step
      }
    } catch (error) {
      setMessage("Invalid credentials");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    clearMessage();
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/auth/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp: otp.join("") }), // Join OTP array to string
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Invalid OTP");
      } else {
        setMessage(
          "OTP verified successfully. You can now reset your password."
        );
        setMessageType("success");
        setStep(3); // Move to password reset step
      }
    } catch (error) {
      setMessage("Invalid credentials");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    clearMessage();
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: newPassword, otp: otp.join("") }), // Join OTP array to string
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to reset password");
      } else {
        const data = await response.json(); // Parse JSON response
        setMessage(data.message || "Password has been successfully reset.");
        setMessageType("success");
        navigate("/login"); // Redirect to login page
      }
    } catch (error) {
      setMessage(error.message);
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-800 to-black">
      <div className="shadow-lg rounded-lg p-8 max-w-sm w-full bg-gray-800">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          {step === 1
            ? "Forgot Password"
            : step === 2
            ? "Verify OTP"
            : "Reset Password"}
        </h2>
        {step === 1 && (
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-orange-600 font-bold rounded-lg hover:bg-orange-700 text-white"
              disabled={loading}
            >
              {loading && (
                <Spinner className="absolute inset-0 m-auto w-6 h-6" />
              )}
              {!loading && "Send OTP"}
            </button>
            {message && (
              <p
                className={`mt-4 text-center ${
                  messageType === "error" ? "text-red-500" : "text-green-500"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="flex justify-center space-x-2 mb-4">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  className="w-12 h-12 text-center border border-gray-300 rounded-lg text-xl"
                  maxLength="1"
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(e.target, index)}
                  onKeyDown={(e) => handleOtpKeyDown(e, index)}
                  ref={(el) => (inputsRef.current[index] = el)}
                />
              ))}
            </div>
            <button
              type="submit"
              className="text-white w-full py-3 bg-orange-600 font-bold rounded-lg hover:bg-orange-700"
              disabled={loading}
            >
              {loading && (
                <Spinner className="absolute inset-0 m-auto w-6 h-6" />
              )}
              {!loading && "Verify OTP"}
            </button>
            {message && (
              <p
                className={`mt-4 text-center ${
                  messageType === "error" ? "text-red-500" : "text-green-500"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        )}
        {step === 3 && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div className="mb-4">
              <label
                htmlFor="new-password"
                className="block text-sm font-medium mb-2 text-white"
              >
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white w-full py-3 bg-orange-600 font-bold rounded-lg hover:bg-orange-700"
              disabled={loading || newPassword.length === 0}
            >
              {loading && (
                <Spinner className="absolute inset-0 m-auto w-6 h-6" />
              )}
              {!loading && "Reset Password"}
            </button>
            {message && (
              <p
                className={`mt-4 text-center ${
                  messageType === "error" ? "text-red-500" : "text-green-500"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
