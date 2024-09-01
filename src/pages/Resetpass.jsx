import React, { useState, useRef } from "react";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";

const ResetPass = ({ notify }) => {
  const backendUrl = "https://keyncoders-main-backend.vercel.app";
  const [password, setPassword] = useState("");
  const imgRef = useRef();
  const passRef = useRef();
  const [loading, setLoading] = useState(false);
  const { token } = useParams();

  const showpass = () => {
    if (passRef.current.type === "password") {
      passRef.current.type = "text";
      imgRef.current.src = "../images/Eyecross.png";
    } else {
      passRef.current.type = "password";
      imgRef.current.src = "../images/Eyeopen.png";
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }),
      });
      if (!response.ok) {
        notify("Failed to reset password");
      } else {
        notify("Password changed successfully");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-800 to-black ">
      <div className="shadow-lg rounded-lg p-8 max-w-sm w-full bg-gray-800 ">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div className="relative">
            <label
              htmlFor="password"
              className="block  text-sm font-medium mb-2"
            >
              New Password
            </label>
            <input
              ref={passRef}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your new password"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <span
              className="absolute inset-y-0 mt-6 flex items-center right-1 cursor-pointer"
              onClick={showpass}
            >
              <img
                ref={imgRef}
                width={24}
                src="../images/Eyeopen.png"
                alt="Eye"
              />
            </span>
          </div>
          <button
            disabled={loading || password.length === 0}
            type="submit"
            className="w-full py-3 bg-purple-600  font-bold rounded-lg hover:bg-purple-700"
          >
            {loading && <Spinner className="absolute inset-0 m-auto w-6 h-6" />}
            {!loading && "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPass;
