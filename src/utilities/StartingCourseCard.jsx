import { Link } from "react-router-dom";

export default function StartingCourseCard({
  name,
  image,
  logo,
  testimony1,
  testimony2,
  educator,
  rating,
}) {
  // Create a dynamic path based on the name prop
  const path = `/${name.toLowerCase()}`;

  return (
    <Link to={path}>
      <div className="max-w-xl mx-auto p-6 mb-10 md:mb-4 bg-gray-400 dark:bg-gradient-to-r from-[#868181] via-[#4b4949] to-[#353232] shadow-lg rounded-lg">
        <span className="font-bold">{name}</span>
        <div className="flex items-center mt-4">
          <img
            src={image}
            alt={name}
            className="w-40 h-40 rounded-3x1 mr-4 border-slate-800 border-[3px]"
          />
          <div style={{ marginTop: "10px" }}>
            <p className="text-lg text-white mt-0 font-extrabold">
              {testimony1}
            </p>
            <p className="mt-4 font-extrabold dark:text-[#999999]">
              {testimony2}
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-end">
            <div className="flex items-center" style={{ marginRight: "10px" }}>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.396-.956 1.954-.956 2.35 0l1.615 3.916c.203.492.73.829 1.28.829h4.306c1.06 0 1.493 1.29.72 1.947l-3.493 3.39c-.362.352-.528.859-.44 1.356l.826 3.998c.219 1.058-.9 1.879-1.81 1.3l-3.582-2.281a1.75 1.75 0 00-1.788 0l-3.582 2.281c-.91.579-2.029-.242-1.81-1.3l.826-3.998c.087-.497-.078-1.004-.44-1.356l-3.493-3.39c-.773-.657-.34-1.947.72-1.947h4.306c.55 0 1.077-.337 1.28-.829l1.615-3.916z"></path>
              </svg>
              <span>{rating}</span>
            </div>
            <span className="text-zinc-900 dark:text-white font-semibold p-2">
              {educator}
            </span>
            <img
              src={logo}
              alt={`${educator} Logo`}
              className="mr-2 w-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
