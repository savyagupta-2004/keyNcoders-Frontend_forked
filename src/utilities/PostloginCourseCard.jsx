import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CodeIcon from "@mui/icons-material/Code";

const PostloginCourseCard = ({ theme, course, topic, img, play }) => {
  return (
    <div className="flex justify-between items-center bg-[#D8D8D8] w-[35rem] rounded-3xl p-3 my-4">
      <div className="flex">
        <img src={`../images/${img}.png`} alt="" className="w-16 h-12 mr-8" />
        <div className="">
          <h3 className="font-bold">{course}</h3>
          <div>{topic}</div>
        </div>
      </div>
      {play ? (
        <PlayCircleOutlineIcon fontSize="large" />
      ) : (
        <CodeIcon fontSize="large" />
      )}
    </div>
  );
};

export default PostloginCourseCard;
