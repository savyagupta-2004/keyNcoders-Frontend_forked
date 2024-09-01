import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [expandedModules, setExpandedModules] = useState({});
  const [selectedVideo, setSelectedVideo] = useState("");

  const toggleModule = (module) => {
    setExpandedModules((prev) => ({
      ...prev,
      [module]: !prev[module],
    }));
  };

  const modules = [
    {
      name: "Module1",
      videos: [
        {
          title: "Chapter 1",
          link: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
        },
        { title: "Chapter 2", link: "https://www.youtube.com/watch?v=xyz2" },
        { title: "Chapter 3", link: "https://www.youtube.com/watch?v=xyz2" },
        { title: "Chapter 4", link: "https://www.youtube.com/watch?v=xyz2" },
      ],
    },
    {
      name: "Module2",
      videos: [
        { title: "chapter 1", link: "https://www.youtube.com/watch?v=xyz3" },
        { title: "chapter 2", link: "https://www.youtube.com/watch?v=xyz4" },
        { title: "Chapter 3", link: "https://www.youtube.com/watch?v=xyz2" },
        { title: "Chapter 4", link: "https://www.youtube.com/watch?v=xyz2" },
      ],
    },
    {
      name: "Module3",
      videos: [
        { title: "chapter 1", link: "https://www.youtube.com/watch?v=xyz5" },
        { title: "chapter 2", link: "https://www.youtube.com/watch?v=xyz6" },
        { title: "Chapter 3", link: "https://www.youtube.com/watch?v=xyz2" },
        { title: "Chapter 4", link: "https://www.youtube.com/watch?v=xyz2" },
      ],
    },
    {
      name: "Module4",
      videos: [
        { title: "chapter 1", link: "https://www.youtube.com/watch?v=xyz7" },
        { title: "chapter 2", link: "https://www.youtube.com/watch?v=xyz8" },
        { title: "Chapter 3", link: "https://www.youtube.com/watch?v=xyz2" },
        { title: "Chapter 4", link: "https://www.youtube.com/watch?v=xyz2" },
      ],
    },
    {
      name: "Module5",
      videos: [
        { title: "chapter 1", link: "https://www.youtube.com/watch?v=xyz9" },
        { title: "chapter 2", link: "https://www.youtube.com/watch?v=xyza" },
        { title: "Chapter 3", link: "https://www.youtube.com/watch?v=xyz2" },
        { title: "Chapter 4", link: "https://www.youtube.com/watch?v=xyz2" },
      ],
    },
    {
      name: "Module6",
      videos: [
        { title: "chapter 1", link: "https://www.youtube.com/watch?v=xyzb" },
        { title: "chapter 2", link: "https://www.youtube.com/watch?v=xyzc" },
        { title: "Chapter 3", link: "https://www.youtube.com/watch?v=xyz2" },
        { title: "Chapter 4", link: "https://www.youtube.com/watch?v=xyz2" },
      ],
    },
    {
      name: "Module7",
      videos: [
        { title: "chapter 1", link: "https://www.youtube.com/watch?v=xyzb" },
        { title: "chapter 2", link: "https://www.youtube.com/watch?v=xyzc" },
        { title: "Chapter 3", link: "https://www.youtube.com/watch?v=xyz2" },
        { title: "Chapter 4", link: "https://www.youtube.com/watch?v=xyz2" },
      ],
    },
    {
      name: "Module8",
      videos: [
        { title: "chapter 1", link: "https://www.youtube.com/" },
        { title: "chapter 2", link: "https://www.youtube.com/watch?v=xyzc" },
        { title: "Chapter 3", link: "https://www.youtube.com/watch?v=xyz2" },
        { title: "Chapter 4", link: "https://www.youtube.com/watch?v=xyz2" },
      ],
    },
  ];

  useEffect(() => {
    if (modules.length > 0 && modules[0].videos.length > 0) {
      setSelectedVideo(modules[0].videos[0].link);
    }
  }, []);

  return (
    <div className="flex">
      <div className="h-screen overflow-y-auto p-4 border-b-10 border-black w-[15%] mt-20">
        {modules.map((module, index) => (
          <div key={index} className="border-b border-red-500">
            <div
              className="cursor-pointer  flex justify-between items-center text-3xl pb-9 text-red-500"
              onClick={() => toggleModule(module.name)}
            >
              {module.name}
              <FontAwesomeIcon
                icon={
                  expandedModules[module.name] ? faChevronUp : faChevronDown
                }
                className="text-red-500"
              />
            </div>
            {expandedModules[module.name] && (
              <div className="ml-4 text-2xl">
                {module.videos.map((video, idx) => (
                  <div
                    className="cursor-pointer border-b border-red-500"
                    key={idx}
                    onClick={() => setSelectedVideo(video.link)}
                  >
                    <span className="text-red-500">{video.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex-grow p-4 mt-20 ">
        {selectedVideo ? (
          <ReactPlayer
            url={selectedVideo}
            controls={true}
            width="100%"
            height="90%"
          />
        ) : (
          <div className="text-2xl">Select a video to play</div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
