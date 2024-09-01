// TestimonialCard.js
export default function StartingCourseCard({
  name,
  surname,
  image,
  logo,
  testimony,
  educator,
  reviews,
  Students,
  Courses,
}) {
  return (
    <div className="max-w-xl mx-auto p-6 mb-10 md:mb-4  bg-gradient-to-r from-[#717171] via-[#575656] to-[#C3C3C3] dark:  shadow-lg rounded-lg ml-12">
      <div className="flex mt-4">
        <div className="mr-4">
          <img
            src={image}
            alt={name}
            className="w-50 h-40 rounded-3x1 border-slate-800 border-[3px]"
          />
          <div className="text-center mt-2 ml-[10%] dark:text-black text-lg font-bold">
            {name}
          </div>
          <div className="text-center mt-0 ml-[7%] text-lg font-bold">
            {surname}
          </div>
        </div>
        <div>
          <div className="text-[21px] mt-0 text-white">{testimony}</div>
          <div className="flex justify-start mt-2">
            <svg
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
            </svg>
            <svg
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
            </svg>
            <svg
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
            </svg>
            <svg
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
            </svg>
            <svg
              className="w-5 h-5 text-yellow-200"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
            </svg>
          </div>
          <div>
            <img src="public/play.png" alt="" />
          </div>
          <div className="text-black font-extrabold">{reviews}</div>
          <div className="text-black font-extrabold">{Students}</div>
          <div className="text-black font-extrabold">{Courses}</div>
          <p className="mt-4 text-black font-extrabold">
            {" "}
            Over 20 plus years of experience in computer science and information
            technology field
          </p>
        </div>
      </div>
    </div>
  );
}
