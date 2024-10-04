function Reason({ theme }) {
  return (
    <>
      <div className="relative bg-[#E6D8F2] dark:bg-[#131313]">
        {theme === "dark" ? (
          <svg
            width="100%"
            height="100%"
            id="svg"
            color="#131313"
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
              fill='url("#gradient")'
              fillOpacity="1"
            ></path>
          </svg>
        ) : (
          <svg
            width="100%"
            height="100%"
            id="svg"
            color="#131313"
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
              fill="#6A38C2"
              fillOpacity="1"
            ></path>
          </svg>
        )}
      </div>
      <section className="dark:bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] bg-[#6A38C2]">
        <div className="mb-0 flex flex-col justify-center items-center">
          <h2 className="md:text-5xl text-3xl font-bold mb-2">
            Why Choose KeyNcoders
          </h2>
          <p className="dark:text-black dark:font-bold text-white mt-2 text-[12px] sm:text-[15px] md:text-[17px] lg:text-[20px]">
            For brilliant minds,we’ve crafted the perfect platform
          </p>
          <img
            src="../images/reasons_upadetaed_bold.webp"
            alt=""
            className=" mt-16 mb-0 w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px]"
          />
        </div>

        <div className="relative mt-0 p-0 mb-0">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              stroke="none"
              strokeWidth="0"
              fill={theme === "dark" ? "#131313" : "#E6D8F2"}
              fillOpacity="1"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}

export default Reason;
