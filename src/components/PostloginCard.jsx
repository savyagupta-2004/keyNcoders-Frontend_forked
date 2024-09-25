import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostloginCourseCard from "../utilities/PostloginCourseCard"; // Adjust the import path if necessary

const PostloginCard = ({ theme }) => {
  const [userdetails, setuserdetails] = useState({ name: "User" }); // Default name is 'User'
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("savedUser");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      // Capitalize the first letter of the username
      const capitalizedUsername = parsedUser.name
        ? parsedUser.name.charAt(0).toUpperCase() +
          parsedUser.name.slice(1).toLowerCase()
        : "User";

      setuserdetails({ name: capitalizedUsername });
    }
  }, []);

  const navigateToVideo = () => {
    navigate("/videos");
  };

  return (
    <div className=" mt-20 mr-20 p-10  h-fit flex items-start justify-between rounded-3xl lg:mx-8 md:mx-3 pl-8">
      <div className="mt-10">
        <h3 className="text-4xl ">
          Hey{" "}
          <span className={theme === "dark" ? "text-yellow-200" : "text-black"}>
            {userdetails.name}
          </span>
        </h3>
        <h1 className="text-4xl font-semibold mt-3">
          Get started with{" "}
          <span className={theme === "dark" ? "text-[#FA793F]" : "text-black"}>
            Coding
          </span>
        </h1>
      </div>

      {/* Course Cards Section */}
      <div className="flex flex-col space-y-2 ml-4">
        <PostloginCourseCard
          theme={theme}
          course="DSA"
          topic="Linked List"
          img="dsa-postlogin"
          play={true}
          onPlayClick={() => console.log("Play button clicked!")}
          onCodeClick={() => console.log("Code button clicked!")}
        />
        <PostloginCourseCard
          theme={theme}
          course="Questions"
          topic="Linked List"
          img="hack"
          play={false}
          onPlayClick={() => console.log("Play button clicked!")}
          onCodeClick={() => console.log("Code button clicked!")}
        />
      </div>
    </div>
  );
};

export default PostloginCard;
