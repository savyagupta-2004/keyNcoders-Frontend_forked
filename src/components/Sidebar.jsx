import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import ReactPlayer from "react-player";
import { getVideos } from "../api/videos";
import Spinner from "./Spinner";
const Sidebar = () => {
  const [expandedModules, setExpandedModules] = useState({});
  const [expandedVideos, setExpandedVideos] = useState({});
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedModule, setSelectedModule] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleModule = (module) => {
    setExpandedModules((prev) => ({
      ...prev,
      [module.moduleName]: !prev[module.moduleName],
    }));
  };

  const toggleChapter = (chapter) => {
    setExpandedVideos((prev) => ({
      ...prev,
      [chapter._id]: !prev[chapter._id], // Use chapter._id to track each chapter
    }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const modules = await getVideos();
        setModules(modules);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (
      modules.length > 0 &&
      modules[0].chapters.length > 0 &&
      modules[0].chapters[0].videos.length > 0
    ) {
      setSelectedVideo(modules[0].chapters[0].videos[0].videoUrl);
      setSelectedModule(modules[0]);
    }
  }, [modules]);

  const handleVideoSelect = (videoUrl, module) => {
    setSelectedVideo(videoUrl);
    setSelectedModule(module);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row pt-16 bg-black items-center justify-center w-full h-screen">
      {!isSidebarOpen && (
        <button
          className="fixed top-20 hidden lg:block dark:bg-[#232222] dark:text-white bg-[#E6E6E6] left-0 justify-center border border-gray-500 text-gray-500 text-black p-2 rounded-lg"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaArrowRightLong size={18} />
        </button>
      )}

      <aside
        id="sidebar-multi-level-sidebar"
        className={`min-w-72 w-full overflow-y-scroll relative lg:h-full transition-transform duration-300 ${
          isSidebarOpen
            ? "lg:col-span-2 lg:w-1/4"
            : "lg:w-0 lg:hidden lg:-translate-x-full"
        } lg:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="overflow-y-scroll lg:px-5 lg:h-[100vh] min-h-[50vh] hide-scroll pt-10 px-3 py-3 bg-gray-50 dark:bg-black">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-[#EF4444]">
              Modules
            </h2>
            <button
              className="hidden lg:block flex items-center justify-center dark:text-[#EF4444] border dark:bg-black border-gray-500 dark:border-[#EF4444] bg-gray-100 p-2 rounded-lg"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FaArrowLeftLong size={18} />
            </button>
          </div>
          {loading ? (
            <div className="w-full  text-white justify-center items-center flex h-96">
              <Spinner />
            </div>
          ) : (
            <ul className="space-y-2 font-medium mt-8">
              {modules.map((module, index) => (
                <li key={index} className="border-b pb-2 border-b-gray-700">
                  <button
                    type="button"
                    className={`flex flex-col justify-start items-start w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg text-sm gap-2 group 
                        ${
                          selectedModule.moduleName === module.moduleName
                            ? " text-white"
                            : ""
                        } 
                        ${
                          selectedModule.moduleName === module.moduleName
                            ? ""
                            : ""
                        } dark:text-[#EF4444]`}
                    onClick={() => toggleModule(module)}
                  >
                    <div className="flex items-center w-full justify-between">
                      <p className="flex-1 text-normal text-wrap text-left whitespace-nowrap">
                        {module.moduleName}
                      </p>
                      <FontAwesomeIcon
                        icon={
                          expandedModules[module.moduleName]
                            ? faChevronUp
                            : faChevronDown
                        }
                      />
                    </div>
                  </button>

                  {expandedModules[module.moduleName] && (
                    <ul className="space-y-2 pl-4">
                      {module.chapters.map((chapter) => (
                        <li key={chapter._id} className="pt-2">
                          <button
                            type="button"
                            className={`flex flex-col justify-start items-start w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg text-sm gap-2 group 
                                ${
                                  selectedModule.moduleName ===
                                  module.moduleName
                                    ? " text-white"
                                    : ""
                                } 
                                ${
                                  selectedModule.moduleName ===
                                  module.moduleName
                                    ? ""
                                    : ""
                                } dark:text-[#EF4444]`}
                            onClick={() => toggleChapter(chapter)} // Use toggleChapter here
                          >
                            <div className="flex items-center w-full justify-between">
                              <p className="font-semibold text-gray-800  dark:text-gray-200">
                                {chapter.chapterName}
                              </p>
                              <FontAwesomeIcon
                                icon={
                                  expandedVideos[chapter._id]
                                    ? faChevronUp
                                    : faChevronDown
                                }
                              />
                            </div>
                            <hr className="h-px border-0 w-full bg-gray-700 my-1" />
                          </button>

                          {expandedVideos[chapter._id] && ( // Use chapter._id here
                            <ul className="pl-4 space-y-1">
                              {chapter.videos.map((video) => (
                                <li
                                  key={video._id}
                                  onClick={() =>
                                    handleVideoSelect(video.videoUrl, module)
                                  }
                                >
                                  <button className="flex flex-col items-start w-full p-2 text-base text-sm text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    <div className="flex items-center w-full justify-between">
                                      <p className="flex-1 text-normal font-light text-wrap text-left whitespace-nowrap">
                                        {video.videoTitle}
                                      </p>
                                    </div>
                                    <div className="flex gap-2 font-extralight items-center justify-start">
                                      <p>{video.releaseTimeDays} days ago</p>
                                    </div>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>

      <div
        className={`flex-grow w-full h-full transition-transform duration-300 ${
          isSidebarOpen ? "lg:w-4/6" : "lg:w-full"
        }`}
      >
        <div className="flex-grow rounded-lg h-full mb-4">
          <div className="flex items-center lg:h-full h-[50vh] justify-center w-full mb-4 rounded">
            {selectedVideo ? (
              <ReactPlayer
                url={selectedVideo}
                controls={true}
                width="100%"
                height="100%"
              />
            ) : (
              <div className="text-2xl text-gray-400">
                Select a video to play
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
