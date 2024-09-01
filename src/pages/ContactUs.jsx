import React, { useState, useRef } from "react";
import Footer from "../utilities/Footer";
import Navbar from "../utilities/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

function ContactUs({ theme, handleThemeSwitch, notify }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const form = useRef();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !message) {
      notify("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://keyncoders-main-backend.vercel.app/admin/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        notify("Failed to send message");
        throw new Error(errorData.error || "Failed to send message");
      } else {
        notify("Email sent successfully! We will get back to you shortly!");
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
      notify("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={`min-h-screen flex flex-col ${
        theme === "dark"
          ? "bg-black"
          : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900]"
      }`}
    >
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />

      <div
        className={`flex-grow flex items-center justify-center mt-[4rem] p-8 sm:p-16`}
      >
        <div className="bg-[#E6E6E6] dark:bg-emerald-300 shadow-lg rounded-3xl p-6 sm:p-10 w-full max-w-5xl">
          <h2 className="text-center text-2xl font-bold mb-6">CONTACT US</h2>
          <div className="gap-6">
            <div className="md:col-span-2 text-center mb-8">
              <h3 className="text-lg font-semibold text-red-600">
                We love our community ❤️
              </h3>
              <p>Have questions or feedback? Get in touch with us today.</p>
            </div>
            <div>
              <form ref={form} onSubmit={sendEmail} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 mb-4">
                    <label
                      htmlFor="name"
                      className="block text-zinc-700 dark:text-black mb-2"
                    >
                      First Name Last Name
                    </label>
                    <input
                      onChange={handleNameChange}
                      required
                      onBlur={(e) => {
                        if (!e.target.value)
                          e.target.setCustomValidity("This field is required.");
                        else e.target.setCustomValidity("");
                      }}
                      type="text"
                      id="name"
                      name="name"
                      className="cursor-pointer w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="flex-1 mb-4">
                    <label
                      htmlFor="email"
                      className="block text-zinc-700 dark:text-black mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      required
                      onBlur={(e) => {
                        !e.target.value
                          ? e.target.setCustomValidity(
                              "This field is required."
                            )
                          : e.target.setCustomValidity("");
                      }}
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      name="email"
                      className="cursor-pointer w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-zinc-700 dark:text-black mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    required
                    onBlur={(e) => {
                      if (!e.target.value)
                        e.target.setCustomValidity("This field is required.");
                      else e.target.setCustomValidity("");
                    }}
                    id="message"
                    value={message}
                    onChange={handleMessageChange}
                    name="message"
                    className="cursor-pointer w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    rows="5"
                  ></textarea>
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    // disabled={email === "" || name === "" || message === ""}
                    type="submit"
                    className="flex items-center justify-center w-[220px] text-center p-1 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-3.5 h-3.5 mr-2 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    {loading && (
                      <Spinner className="absolute inset-0 m-auto w-6 h-6" />
                    )}
                    {!loading && "Send Message"}
                  </button>
                  <Link
                    target="_blank"
                    to="https://wa.me/7010683891"
                    type="button"
                    className="flex items-center justify-center w-[220px] bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="h-5 md:h-6 mr-2"
                    />
                    WhatsApp
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900]`}
      >
        <Footer theme={theme} />
      </div>
    </section>
  );
}

export default ContactUs;
