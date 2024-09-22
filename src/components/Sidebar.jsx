import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FaBars, FaHryvnia, FaTachometerAlt, FaTimes } from "react-icons/fa";
import ReactPlayer from "react-player";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

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
      name: "Section 1: Front End Web Development",
      mentor: "Dr. John Doe",
      videos: [
        {
          title: "Chapter 1: Introduction to HTML",
          link: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
          description: "Introduction to the basics of HTML and its structure."
        },
        {
          title: "Chapter 2: CSS Fundamentals",
          link: "https://www.youtube.com/watch?v=xyz2",
          description: "In-depth exploration of CSS styles and layouts."
        },
        {
          title: "Chapter 3: JavaScript Basics",
          link: "https://www.youtube.com/watch?v=xyz3",
          description: "Overview of JavaScript syntax and functionality."
        },
        {
          title: "Chapter 4: Building Responsive Websites",
          link: "https://www.youtube.com/watch?v=xyz4",
          description: "Techniques for making websites responsive."
        },
      ],
    },
    {
      name: "Section 2: Back End Web Development",
      mentor: "Dr. Jane Smith",
      videos: [
        {
          title: "Chapter 1: Introduction to Server-Side Programming",
          link: "https://www.youtube.com/watch?v=xyz5",
          description: "Understanding server-side vs client-side scripting."
        },
        {
          title: "Chapter 2: Database Management with SQL",
          link: "https://www.youtube.com/watch?v=xyz6",
          description: "How to use SQL for managing databases."
        },
        {
          title: "Chapter 3: RESTful APIs",
          link: "https://www.youtube.com/watch?v=xyz7",
          description: "Creating and consuming RESTful APIs."
        },
        {
          title: "Chapter 4: Authentication and Security",
          link: "https://www.youtube.com/watch?v=xyz8",
          description: "Best practices for user authentication and data security."
        },
      ],
    },
    {
      name: "Section 3: Full Stack Development",
      mentor: "Dr. Emily Davis",
      videos: [
        {
          title: "Chapter 1: Understanding the MERN Stack",
          link: "https://www.youtube.com/watch?v=xyz9",
          description: "Overview of the MERN stack components."
        },
        {
          title: "Chapter 2: Building a Full Stack Application",
          link: "https://www.youtube.com/watch?v=xyz10",
          description: "Step-by-step guide to developing a full stack app."
        },
        {
          title: "Chapter 3: Deployment Strategies",
          link: "https://www.youtube.com/watch?v=xyz11",
          description: "How to deploy your full stack applications."
        },
        {
          title: "Chapter 4: Best Practices in Full Stack Development",
          link: "https://www.youtube.com/watch?v=xyz12",
          description: "Tips for effective full stack development."
        },
      ],
    },
    {
      name: "Section 4: Mobile App Development",
      mentor: "Dr. Sarah Lee",
      videos: [
        {
          title: "Chapter 1: Introduction to Mobile Development",
          link: "https://www.youtube.com/watch?v=xyz13",
          description: "Understanding the landscape of mobile app development."
        },
        {
          title: "Chapter 2: React Native Basics",
          link: "https://www.youtube.com/watch?v=xyz14",
          description: "Getting started with React Native for mobile apps."
        },
        {
          title: "Chapter 3: Building a Simple Mobile App",
          link: "https://www.youtube.com/watch?v=xyz15",
          description: "Hands-on project: Create a basic mobile application."
        },
        {
          title: "Chapter 4: Publishing Mobile Apps",
          link: "https://www.youtube.com/watch?v=xyz16",
          description: "How to publish your app on app stores."
        },
      ],
    },
    {
      name: "Section 5: UI/UX Design Principles",
      mentor: "Dr. Alex Johnson",
      videos: [
        {
          title: "Chapter 1: Introduction to UI/UX Design",
          link: "https://www.youtube.com/watch?v=xyz17",
          description: "Understanding the fundamentals of UI/UX design."
        },
        {
          title: "Chapter 2: Wireframing and Prototyping",
          link: "https://www.youtube.com/watch?v=xyz18",
          description: "Techniques for creating wireframes and prototypes."
        },
        {
          title: "Chapter 3: Usability Testing",
          link: "https://www.youtube.com/watch?v=xyz19",
          description: "Methods for testing the usability of your designs."
        },
        {
          title: "Chapter 4: Design Tools and Software",
          link: "https://www.youtube.com/watch?v=xyz20",
          description: "Overview of popular design tools."
        },
      ],
    },
    {
      name: "Section 6: DevOps and Continuous Integration",
      mentor: "Dr. Brian Green",
      videos: [
        {
          title: "Chapter 1: Understanding DevOps",
          link: "https://www.youtube.com/watch?v=xyz21",
          description: "Introduction to DevOps principles and practices."
        },
        {
          title: "Chapter 2: Continuous Integration Basics",
          link: "https://www.youtube.com/watch?v=xyz22",
          description: "Setting up CI/CD pipelines for your projects."
        },
        {
          title: "Chapter 3: Containerization with Docker",
          link: "https://www.youtube.com/watch?v=xyz23",
          description: "Getting started with Docker for application deployment."
        },
        {
          title: "Chapter 4: Monitoring and Logging",
          link: "https://www.youtube.com/watch?v=xyz24",
          description: "Best practices for monitoring and logging applications."
        },
      ],
    },
    {
      name: "Section 7: Cloud Computing",
      mentor: "Dr. Rachel Adams",
      videos: [
        {
          title: "Chapter 1: Introduction to Cloud Computing",
          link: "https://www.youtube.com/watch?v=xyz25",
          description: "Understanding the basics of cloud computing."
        },
        {
          title: "Chapter 2: AWS Basics",
          link: "https://www.youtube.com/watch?v=xyz26",
          description: "Getting started with Amazon Web Services."
        },
        {
          title: "Chapter 3: Deploying Applications on the Cloud",
          link: "https://www.youtube.com/watch?v=xyz27",
          description: "How to deploy applications on cloud platforms."
        },
        {
          title: "Chapter 4: Cloud Security Best Practices",
          link: "https://www.youtube.com/watch?v=xyz28",
          description: "Ensuring security in cloud environments."
        },
      ],
    },
    {
      name: "Section 8: Data Science and Analytics",
      mentor: "Dr. Lisa White",
      videos: [
        {
          title: "Chapter 1: Introduction to Data Science",
          link: "https://www.youtube.com/watch?v=xyz29",
          description: "Basics of data science and its applications."
        },
        {
          title: "Chapter 2: Data Analysis with Python",
          link: "https://www.youtube.com/watch?v=xyz30",
          description: "Using Python for data analysis and visualization."
        },
        {
          title: "Chapter 3: Machine Learning Basics",
          link: "https://www.youtube.com/watch?v=xyz31",
          description: "Introduction to machine learning concepts."
        },
        {
          title: "Chapter 4: Data Ethics and Privacy",
          link: "https://www.youtube.com/watch?v=xyz32",
          description: "Understanding ethics in data science."
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
    <div className="flex flex-col-reverse lg:flex-row pt-16 bg-black items-center justify-center w-full h-screen">
      {!isSidebarOpen && <button
        className=" fixed top-20 hidden lg:block dark:bg-[#232222] dark:text-white bg-[#E6E6E6] left-0 justify-center border border-gray-500 text-gray-500 text-black p-2 rounded-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaArrowRightLong size={18} />
      </button>}

      <aside
        id="sidebar-multi-level-sidebar"
        className={`min-w-72 w-full overflow-y-scroll relative lg:h-full transition-transform duration-300 ${isSidebarOpen ? 'lg:col-span-2 lg:w-1/4' : 'lg:w-0 lg:hidden lg:-translate-x-full'} lg:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="overflow-y-scroll lg:px-5 lg:h-[100vh] min-h-[50vh] hide-scroll pt-10 px-3 py-3 bg-gray-50 dark:bg-black">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-[#EF4444]">Modules</h2>
            {/* Toggle button only visible on large screens */}
            <button
              className="hidden lg:block flex items-center justify-center dark:text-[#EF4444] border dark:bg-black border-gray-500 dark:border-[#EF4444] bg-gray-100 p-2 rounded-lg"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FaArrowLeftLong size={18} />
            </button>
          </div>
          <ul className="space-y-2 font-medium mt-8">
            {modules.map((module, index) => (
              <li key={index} className="border-b pb-2 border-b-gray-700">
                <button
                  type="button"
                  className={`flex flex-col justify-start items-start w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg text-sm gap-2 group 
                  ${selectedModule === module.name ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'} 
                  dark:${selectedModule === module.name ? 'bg-gray-700' : ''} dark:text-[#EF4444] hover:bg-gray-600`}
                  onClick={() => toggleModule(module)}
                >
                  <div className="flex items-center w-full justify-between">
                    <p className="flex-1 text-normal text-wrap text-left rtl:text-right whitespace-nowrap">{module.name}</p>
                    <FontAwesomeIcon icon={expandedModules[module.name] ? faChevronUp : faChevronDown} />
                  </div>
                  <div className="flex gap-2 items-center justify-start">
                    <p>3/3</p>
                    <p>|</p>
                    <p>1 hr 10 min</p>
                  </div>
                </button>
                {expandedModules[module.name] && (
                  <ul className="space-y-2">
                    {module.videos.map((video, idx) => (
                      <li key={idx} onClick={() => handleVideoSelect(video.link, module)}>
                        <button className="flex border-b-gray-700 border-b flex-col items-start w-full p-2 text-base text-sm text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                          <div className="flex items-center w-full justify-between">
                            <p className="flex-1 text-normal text-wrap text-left rtl:text-right whitespace-nowrap">{video.title}</p>
                          </div>
                          <div className="flex gap-2 items-center justify-start">
                            <p>1 hr 10 min</p>
                          </div>
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

      <div className={` flex-grow w-full  h-full transition-transform duration-300 ${isSidebarOpen ? 'lg:w-4/6' : 'lg:w-full'} `}>
        <div className="flex-grow rounded-lg h-full mb-4">
          <div className="flex items-center lg:h-full h-[50vh] justify-center w-full mb-4 rounded">
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
