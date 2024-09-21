import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FaBars, FaTachometerAlt, FaTimes } from "react-icons/fa";
import ReactPlayer from "react-player";

const Sidebar = () => {
  const [expandedModules, setExpandedModules] = useState({});
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedModule, setSelectedModule] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  const toggleModule = (module) => {
    setExpandedModules((prev) => ({
      ...prev,
      [module.name]: !prev[module.name],
    }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const modules = [
    {
      name: "Module1",
      mentor: "Dr. John Doe",
      videos: [
        {
          title: "Chapter 1",
          link: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
          description: "Introduction to the basics of the module."
        },
        {
          title: "Chapter 2",
          link: "https://www.youtube.com/watch?v=xyz2",
          description: "In-depth exploration of the first concept."
        },
        {
          title: "Chapter 3",
          link: "https://www.youtube.com/watch?v=xyz2",
          description: "Detailed discussion on advanced topics."
        },
        {
          title: "Chapter 4",
          link: "https://www.youtube.com/watch?v=xyz2",
          description: "Summary and conclusion of the module."
        },
      ],
    },
    {
      name: "Module2",
      mentor: "Dr. Jane Smith",
      videos: [
        {
          title: "Chapter 1",
          link: "https://www.youtube.com/watch?v=xyz3",
          description: "Overview of the main principles of the module."
        },
        {
          title: "Chapter 2",
          link: "https://www.youtube.com/watch?v=xyz4",
          description: "Explanation of key concepts and their applications."
        },
        {
          title: "Chapter 3",
          link: "https://www.youtube.com/watch?v=xyz2",
          description: "Advanced techniques and their implementations."
        },
        {
          title: "Chapter 4",
          link: "https://www.youtube.com/watch?v=xyz2",
          description: "Review and wrap-up of the key points discussed."
        },
      ],
    },

  ];
  

  useEffect(() => {
    if (modules.length > 0 && modules[0].videos.length > 0) {
      setSelectedVideo(modules[0].videos[0].link);
      setSelectedModule(modules[0]);
    }
  }, []);

  const handleVideoSelect = (videoLink, module) => {
    setSelectedVideo(videoLink);
    setSelectedModule(module);
  };

  return (
    <div className="flex relative">
      {/* Toggle button for the sidebar */}
      {!isSidebarOpen && (
          <button
          className="p-2 bg-gray-900 text-white rounded"
          onClick={(event) => {
            toggleSidebar();
          }}
        >
          <FaBars />
        </button>
      )}

      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 overflow-y-scroll   z-40 w-64 lg:relative pt-12 h-full dark:bg-black transition-transform  transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="overflow-y-scroll h-[95vh] hide-scroll md:pt-10 px-3 py-3 bg-gray-50 dark:bg-black">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-[#EF4444]">Modules</h2>
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-900 dark:text-red-400 dark:hover:text-white block lg:hidden"
            >
              <FaTimes />

            </button>
          </div>
          <ul className="space-y-2 font-medium mt-8">
            {modules.map((module, index) => (
              <li key={index}>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-[#EF4444] dark:hover:bg-gray-700"
                  onClick={() => toggleModule(module)}
                >

                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{module.name}</span>
                  <FontAwesomeIcon icon={expandedModules[module.name] ? faChevronUp : faChevronDown} />
                </button>
                {expandedModules[module.name] && (
                  <ul className="pl-6 space-y-2">
                    {module.videos.map((video, idx) => (
                      <li key={idx} onClick={() => handleVideoSelect(video.link, module)}>
                        <button className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                          {video.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="flex-grow  pt-5 +z h-[95vh]  dark:bg-black  overflow-y-scroll mt-12">
        <div className=" h-full rounded-lg">
          <div className="flex items-center h-[95%]  justify-center mb-4 rounded">
            {selectedVideo ? (
              <ReactPlayer url={selectedVideo} controls={true} width="100%" height="100%" />
            ) : (
              <div className="text-2xl text-gray-400">Select a video to play</div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
