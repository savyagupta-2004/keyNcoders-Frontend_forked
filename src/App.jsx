import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import PreLogin from "./pages/PreLogin.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Login from "./pages/Login.jsx";
import CodeEditor from "./pages/CodeEditor.jsx";
import Signup from "./pages/Signup.jsx";
import Batches from "./pages/Batches.jsx";
import MyBatches from "./pages/MyBatches.jsx";
import React, { useState, useEffect, useContext } from "react";
import PostLogin from "./pages/PostLogin.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import DsaCourse from "./pages/DsaCourse.jsx";
import NextjsCourse from "./pages/NextjsCourse.jsx";
import Videos from "./utilities/Videos.jsx";
import Mentor from "./pages/Mentor.jsx";
import MentorProfile from "./pages/MentorProfile.jsx";
import JobAlerts from "./pages/JobAlerts.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import QuestionPage from "./pages/QuestionsPage.jsx";
import Forgotpassword from "./pages/Forgotpassword.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./authContext.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import ResetPass from "./pages/Resetpass.jsx";
import Spinner from "./components/Spinner.jsx";
import Postlogin_testing from "./pages/Postlogin_testing.jsx";
import Postlogin_temp from "./pages/Postlogin_temp.jsx";
import Explorepage from "./pages/Explorepage.jsx";
import Projectidea1 from "./pages/Projectidea1.jsx";
import Projects from "./pages/Projects.jsx";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const notify = (message, type = "default") => {
    toast(message, {
      type,
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "custom-toast",
    });
  };
  //savya gupta

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <style>{`
        .custom-toast {
          background-color: #333;
          color: #fff;
          border-radius: 8px;
        }

        .custom-toast .Toastify__toast--default {
          background-color: #333;
          color: #fff;
        }

        .custom-toast .Toastify__toast--success {
          background-color: #4caf50;
          color: #fff;
        }

        .custom-toast .Toastify__toast--error {
          background-color: #f44336;
          color: #fff;
        }

        .custom-toast .Toastify__close-button {
          color: white;
        }
      `}</style>
      <div>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <PreLogin
                    theme={theme}
                    handleThemeSwitch={handleThemeSwitch}
                  />
                }
              />

              <Route
                path="/batches"
                element={
                  <ProtectedRoute>
                    <Batches
                      theme={theme}
                      handleThemeSwitch={handleThemeSwitch}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/my-batches"
                element={
                  <ProtectedRoute>
                    <MyBatches
                      theme={theme}
                      handleThemeSwitch={handleThemeSwitch}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user-postlogin"
                element={
                  // <ProtectedRoute>
                  <Postlogin_temp
                    theme={theme}
                    handleThemeSwitch={handleThemeSwitch}
                  />
                  // </ProtectedRoute>
                }
              />
              <Route
                path="/dsa"
                element={
                  <DsaCourse
                    theme={theme}
                    handleThemeSwitch={handleThemeSwitch}
                  />
                }
              />
              <Route
                path="/nextjs"
                element={
                  <NextjsCourse
                    theme={theme}
                    handleThemeSwitch={handleThemeSwitch}
                  />
                }
              />

              <Route
                path="/login"
                element={<Login theme={theme} notify={notify} />}
              />
              <Route
                path="/signup"
                element={<Signup theme={theme} notify={notify} />}
              />
              <Route
                path="/about"
                element={
                  <AboutUs
                    handleThemeSwitch={handleThemeSwitch}
                    theme={theme}
                  />
                }
              />
              <Route
                path="/contact-us"
                element={
                  <ContactUs
                    handleThemeSwitch={handleThemeSwitch}
                    theme={theme}
                    notify={notify}
                  />
                }
              />
              <Route
                path="/videos"
                element={
                  // <ProtectedRoute>
                  <Videos theme={theme} handleThemeSwitch={handleThemeSwitch} />
                  // </ProtectedRoute>
                }
              />
              <Route
                path="/explore"
                element={
                  <ProtectedRoute>
                    <Explorepage
                      theme={theme}
                      handleThemeSwitch={handleThemeSwitch}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/projects1"
                element={
                  <ProtectedRoute>
                    <Projectidea1
                      handleThemeSwitch={handleThemeSwitch}
                      theme={theme}
                    />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/projects"
                element={
                  <ProtectedRoute>
                    <Projects
                      handleThemeSwitch={handleThemeSwitch}
                      theme={theme}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/mentor-connect"
                element={
                  <ProtectedRoute>
                    <Mentor
                      theme={theme}
                      handleThemeSwitch={handleThemeSwitch}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/mentor-profile/:mentorName"
                element={
                  <ProtectedRoute>
                    <MentorProfile
                      theme={theme}
                      handleThemeSwitch={handleThemeSwitch}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="codeEditor/:questionName"
                element={
                  <ProtectedRoute>
                    <CodeEditor
                      theme={theme}
                      handleThemeSwitch={handleThemeSwitch}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/job-alerts"
                element={
                  <ProtectedRoute>
                    <JobAlerts
                      theme={theme}
                      handleThemeSwitch={handleThemeSwitch}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions"
                element={
                  <ProtectedRoute>
                    <QuestionPage
                      theme={theme}
                      handleThemeSwitch={handleThemeSwitch}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user-profile"
                element={
                  <ProtectedRoute>
                    <UserProfile
                      theme={theme}
                      handleThemeSwitch={handleThemeSwitch}
                    />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/forgotPass"
                element={
                  <ProtectedRoute>
                    <Forgotpassword notify={notify} />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<ErrorPage />} />
              <Route
                path="/reset-password/:token"
                element={<ResetPass notify={notify} />}
              />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>

      <ToastContainer />
    </>
  );
};

export default App;
