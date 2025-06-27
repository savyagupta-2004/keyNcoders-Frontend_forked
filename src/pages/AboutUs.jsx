import Navbar from "../utilities/Navbar";
import Footer from "../utilities/Footer";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faRocket,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutUs({ handleThemeSwitch, theme }) {
  const getGradientBackground = (index) => {
    if (theme === "dark" && index != 1) {
      return "bg-[#131313]";
    }
    return "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900]";
  };

  return (
    <>
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <section
        className={`bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] min-h-screen pt-10 md:pt-20 mb-0 flex flex-col justify-between relative`}
      >
        <div>
          <h1 className="text-gray-700 dark:text-gray-300 text-[40px] md:text-[85px] text-center font-bold mt-20 md:mt-40 mb-4">
            Revolutionizing Education
          </h1>
          <p className="text-black dark:text-gray-300 text-md md:text-lg text-justify m-auto w-[90%] md:w-[60%]">
            No matter who you are or where you come from, we provide the best
            training and placement opportunities for everyone, from all walks of
            life.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-10 ">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#ED374D"></stop>
                <stop offset="51%" stopColor="#FA793F"></stop>
                <stop offset="100%" stopColor="#FCB900"></stop>
              </linearGradient>
            </defs>
            <path
              d="M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              stroke="none"
              strokeWidth="0"
              fill={theme === "dark" ? "#1a1a1a" : "#D9D9D9"}
              fillOpacity="1"
            ></path>
          </svg>
        </div>
      </section>

      <section className={`bg-[#D9D9D9] dark:bg-[#1a1a1a] h-fit `}>
        <div className="flex flex-col md:flex-row p-10 md:p-20 justify-around">
          <div className="flex-col sm:flex md:flex lg:flex-row">
            <img
              src="/images/about.webp"
              alt="Founders"
              className="h-[200px] md:h-[500px] w-full md:w-[600px] rounded-3xl bg-gray-200 dark:bg-gray-700 "
            ></img>
            <div className="w-full md:w-[600px] flex flex-col items-start p-5 mx-5">
              <div className="flex justify-center gap-5 items-center mb-4">
                <div className="h-[60px] w-[6px] bg-[#FF0000]"></div>
                <h1 className="text-[#FF0000] text-[30px] md:text-[40px]">
                  🔄 A LITTLE HISTORY
                </h1>
              </div>
              <p className="dark:text-gray-400 w-full  md:w-[90%] lg:w-[99%] text-left">
                In January 2023, we noticed a striking trend: a surge in student
                enrollments in BCA and other tech-related degrees. However, a
                concerning statistic quickly came to our attention—only about 1%
                of these students were successfully transitioning their
                education into viable careers. This discrepancy highlighted a
                significant gap that needed addressing. Driven by this insight,
                we embarked on a mission. From January 2023 to May 2024, we
                devoted ourselves to developing a solution. We meticulously
                researched over 50 colleges and engaged with more than 4,000
                students to understand their needs and challenges better. Our
                efforts culminated in the creation of keyNcoders—a comprehensive
                training and placement platform designed to bridge the gap
                between education and career success. Regardless of your
                background or the program you're enrolled in, we are here to be
                your dedicated partner in training and career placement. At
                keyNcoders, we are committed to transforming potential into
                achievement, ensuring that every student has the opportunity to
                turn their education into a successful career.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`bg-[#D9D9D9] dark:bg-[#1a1a1a] h-fit`}>
        <div className="flex flex-col md:flex-row p-10 md:p-20 justify-around">
          <div className="w-full md:w-[600px] flex flex-col items-start p-5 md:p-20">
            <div className="flex justify-center gap-5 items-center mb-4">
              <div className="h-[60px] w-[6px] bg-[#2BB79D]"></div>
              <h1 className="text-[#2BB79D] text-[30px] md:text-[40px]">
                🚀 THE PROBLEM
              </h1>
            </div>
            <p className=" dark:text-gray-400 w-full md:w-[90%] text-justify">
              Even with high enrollment in BCA and similar degrees across many
              local colleges in India, there’s a significant gap in helping
              students find good career opportunities. Many colleges have weak
              or nonexistent placement cells, making it harder for students to
              become job-ready. On the other hand, startups and companies also
              struggle to find skilled professionals within their budgets.
            </p>
          </div>
          <div className="w-full md:w-[600px] flex flex-col items-start p-5  md:p-20 ">
            <div className="flex justify-center gap-5 items-center mb-4">
              <div className="h-[60px] w-[6px] bg-[#0132E0]"></div>
              <h1 className="text-[#0132E0] text-[30px] md:text-[40px]">
                💡 THE SOLUTION
              </h1>
            </div>
            <p className=" dark:text-gray-400 w-full md:w-[90%] text-justify">
              Keyncoders aims to be the finest training and placement cell for
              local colleges nationwide. We believe that, regardless of
              financial or location constraints, every deserving candidate
              deserves excellent skills and placement opportunities.
            </p>
          </div>
        </div>
      </section>
      <section className={`bg-[#D9D9D9] dark:bg-[#1a1a1a] h-fit p-10 md:p-20`}>
        <h1 className="dark:text-gray-300 font-bold text-[30px] md:text-[40px] text-center mb-10">
          Meet Our Founders
        </h1>
        <div className="flex flex-col md:flex-row justify-between md:gap-10 relative">
          {/* First Founder */}
          <div className="w-full md:w-1/2 flex flex-col items-center mb-10 md:mb-0 transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-[#FF6652] font-semibold text-[20px] md:text-[30px] text-center mb-2 flex items-center">
              Nitish Kumar Mehta
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/nitish-kumar-mehta-427955276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                type="button"
                className="ml-3"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="dark:text-[#B0B8BC] text-black h-5 md:h-6"
                />
              </Link>
            </h2>
            <img
              width={277}
              src="/images/founder.webp"
              alt="Founder"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-6"
            />
            <p className="dark:text-gray-400 text-justify mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              Nitish always envisioned an entrepreneurial path, driven by a
              desire to make a difference. Growing up in a tier 2 city, he
              recognized the challenges faced by aspiring tech professionals in
              his community. He noticed that many viewed BCA as just a degree
              with limited opportunities and a dead end after graduation, but he
              believed it could be so much more. Nitish thought, “Why should
              people restrict themselves just for the sake of graduation? There
              are countless individuals from these backgrounds achieving great
              things in tech, so why not make it a viable option?” What was
              missing was a platform to train and guide these individuals,
              exposing them to the various paths they could explore in the tech
              industry with onsite placement opportunities. With a vision that
              transcends background and financial constraints, Nitish founded
              keyNcoders to support those who want to enter the tech field but
              can’t afford traditional engineering degrees. He also saw the need
              to address the lack of functional placement cells in local
              colleges, prompting him to create a space where aspiring tech
              enthusiasts could thrive and connect. Through keyNcoders, Nitish
              aims to empower individuals from all walks of life, providing them
              with the skills and support they need to succeed in the tech
              industry.
            </p>
          </div>

          {/* Second Founder */}
          <div className="w-full md:w-1/2 flex flex-col items-center mb-10 md:mb-0 transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-[#FF6652] font-semibold text-[20px] md:text-[30px] text-center mb-2 flex items-center">
              Savya Gupta
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/-savyagupta"
                type="button"
                className="ml-3"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="dark:text-[#B0B8BC] text-black h-5 md:h-6"
                />
              </Link>
            </h2>
            <img
              width={277}
              src="/images/savya.jpg"
              alt="Founder"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-6"
            />
            <p className="dark:text-gray-400 text-justify mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              Savya Gupta embodies a relentless pursuit of growth and
              innovation, driven by a commitment to empower aspiring tech
              professionals. Hailing from a tier 2 city, Savya witnessed
              firsthand the challenges faced by individuals pursuing careers in
              technology. Many viewed a BCA degree as a mere stepping stone with
              limited prospects, often leading to a sense of stagnation
              post-graduation. Savya, however, saw potential where others
              perceived barriers, asking, “Why should aspirations be confined by
              conventional norms? Numerous individuals from similar backgrounds
              have made significant strides in the tech industry, and it is
              crucial to highlight these pathways.” Recognizing the absence of
              platforms dedicated to nurturing talent and guiding individuals
              through the diverse opportunities within the tech sector, Savya
              envisioned a transformative solution. This vision culminated in
              the founding of keyNcoders, a pioneering initiative aimed at
              providing accessible training and mentorship for those eager to
              enter the tech field, regardless of their financial circumstances.
              Moreover, Savya identified a significant gap in functional
              placement support within local colleges. This insight fueled the
              creation of an environment where aspiring tech enthusiasts could
              flourish and gain essential skills.
            </p>
          </div>
        </div>

        {/* Inline styles */}
        <style jsx>{`
          @keyframes climb {
            0% {
              top: 0;
            }
            50% {
              top: 350px;
            }
            100% {
              top: 0;
            }
          }

          .animate-climb {
            animation: climb 20s ease-in-out infinite;
          }
        `}</style>
      </section>

      <section className={` bg-[#D9D9D9] dark:bg-[#1a1a1a]`}>
        <div className="relative">
          <svg
            width="100%"
            height="100%"
            color="#ED374D"
            id="svg"
            viewBox="0 0 1440 300" // Changed the viewBox to better fit the wave
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#ED374D"></stop>
                <stop offset="51%" stopColor="#FA793F"></stop>
                <stop offset="100%" stopColor="#FCB900"></stop>
              </linearGradient>
            </defs>
            <path
              d="M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              stroke="none"
              strokeWidth="0"
              fill={"url(#gradient)"}
              fillOpacity="1"
            ></path>
          </svg>
        </div>
      </section>
      <section className={`${getGradientBackground(1)} text-black  `}>
        <div className="dark:text-white text-center md:text-5xl text-3xl font-bold mb-6">
          Who are we?
        </div>
        <p className="text-center max-w-md mx-auto mb-8">
          At KeyNcoders, we ensure skilled students are matched with tech
          companies
        </p>
        <div className="flex flex-wrap justify-center gap-4 ">
          <div className="w-[200px] lg:w-[500px] h-fit md:w-[400px] sm:w-[200px]  rounded-3xl bg-gray-200 dark:bg-gray-700 mb-10 md:mb-0 p-6">
            <p className="text-center">
              <i className="text-black dark:text-gray-300 font-bold">
                Your Learning partner
              </i>
            </p>
            <p className="text-gray-800 dark:text-gray-400">
              KeyNcoders provides a tailored curriculum, structured learning
              path, and dedicated mentors to ensure students meet current
              industry needs and excel in interviews.
            </p>
          </div>
          <div className="w-[200px] lg:w-[500px] h-fit md:w-[400px] sm:w-[200px]   rounded-3xl bg-gray-200 dark:bg-gray-700 mb-10 md:mb-0 p-6">
            <p className="text-center">
              <i className="text-black dark:text-gray-300 font-bold">
                Your Placement Cell
              </i>
            </p>
            <p className="text-gray-800 dark:text-gray-400">
              KeyNcoders offers placement support for BCA and similar degrees,
              bridging gaps for colleges with weak placement cells and ensuring
              equal access to opportunities.
            </p>
          </div>
          <div className="w-[200px] lg:w-[500px] h-fit md:w-[400px] sm:w-[200px] rounded-3xl bg-gray-200 dark:bg-gray-700 mb-10 md:mb-0 p-6">
            <p className="text-center">
              <i className="text-black dark:text-gray-300 font-bold">
                Your Hiring Partner
              </i>
            </p>
            <p className="text-gray-800 dark:text-gray-400">
              KeyNcoders partners with tech companies for direct hiring and
              offers budget-friendly solutions, connecting skilled candidates
              with affordable opportunities.
            </p>
          </div>
        </div>
        <div className="relative">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 310" // Changed the viewBox to better fit the wave
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#ED374D"></stop>
                <stop offset="51%" stopColor="#FA793F"></stop>
                <stop offset="100%" stopColor="#FCB900"></stop>
              </linearGradient>
            </defs>
            <path
              d="M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              stroke="none"
              strokeWidth="0"
              fill={theme === "dark" ? "#131313" : "#D9D9D9"}
              fillOpacity="1"
            ></path>
          </svg>
        </div>
      </section>
      <section
        className={`bg-[#D9D9D9] dark:bg-[#131313] text-white text-center px-5`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-10 sm:mb-16 md:mb-20 dark:text-white text-center">
          Recognitions
        </h1>
        <div className="max-w-screen-lg mx-auto py-10 flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">
          <img
            src={
              theme === "dark"
                ? "./images/vitWhite.webp"
                : "./images/vitBlack.webp"
            }
            alt="VIT Logo"
            className="h-32 sm:h-36 md:h-40 object-contain"
          />
          <img
            src={
              theme === "dark"
                ? "./images/microsoftWhite.webp"
                : "./images/microsoftBlack.webp"
            }
            alt="Microsoft Logo"
            className="h-32 sm:h-36 md:h-40 object-contain"
          />
        </div>
      </section>

      <Footer theme={theme} />
    </>
  );
}

export default AboutUs;
