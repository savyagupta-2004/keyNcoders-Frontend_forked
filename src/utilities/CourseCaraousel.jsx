import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faDownload, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CourseCaraousel() {
  return (
    <div className="w-[400px] mx-auto bg-white dark:bg-[#5c5555] rounded-lg shadow-lg overflow-hidden">
      <div className="bg-[#B17373] h-48 w-[90%] mt-6 mx-auto rounded-lg"></div>
      <div className="p-4">
        <div className="text-sm text-zinc-500 dark:text-gray-300">
          course domain?
        </div>
        <div className="text-lg font-bold mb-2 dark:text-white">
          Course name
        </div>
        <div className="text-lg text-orange-500 font-bold ">Price</div>
        <hr className="my-3 border-t border-zinc-200" />
        <div className="flex items-center justify-between text-zinc-600 text-sm">
          <div className="flex items-center">
            <FontAwesomeIcon className="dark:text-black" icon={faClock} />

            <span className="ml-1 dark:text-white">duration</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faVideo} className="dark:text-black" />
            <span className="ml-1 dark:text-white">no: of lect</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faDownload} className="dark:text-black" />
            <span className="ml-1 dark:text-white">download</span>
          </div>
        </div>
        <button className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-orange-600">
          Join Course
        </button>
      </div>
    </div>
  );
}

export default CourseCaraousel;
