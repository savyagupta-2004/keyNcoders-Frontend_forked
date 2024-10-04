import PostloginNavbar from "../utilities/PostloginNavbar";
import Offered_courses from "../components/Starting_courses";
import Instructors from "../components/Instructors";
import Footer1 from "../utilities/Footer";
import MyBatch from "../components/MyBatch";

function MyBatches({ theme, handleThemeSwitch }) {
  return (
    <div
      className={`flex  flex-col w-full h-full overflow-x-hidden ${
        theme === "dark"
          ? "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] text-white "
          : " text-black bg-[#E6D8F2] "
      }`}
    >
      <div
        className={`min-h-[72vh] sm:mb-3 md:mb-2 lg:mb-1 sm:mt-40 md:mt-20 lg:mt-24 ${
          theme === "dark"
            ? "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] mt-20"
            : ""
        }`}
      >
        <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
        {/* <Offered_courses theme={theme} />
      <Instructors theme={theme} /> */}

        <MyBatch theme={theme} />
      </div>
      {theme === "dark" ? (
        <div className="relative bottom-0">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 310"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              stroke="none"
              strokeWidth="0"
              fill="#131313"
              fillOpacity="1"
            ></path>
          </svg>
        </div>
      ) : (
        <div className="mt-32"></div>
      )}
      <Footer1 theme={theme} />
    </div>
  );
}

export default MyBatches;
