import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CodeIcon from "@mui/icons-material/Code";
import { useNavigate } from "react-router-dom";

const PostloginCourseCard = ({ theme, course, topic, img, play }) => {
  const navigate = useNavigate();

  const handlevideonavigate = () => {
    navigate("/videos");
  };

  const handlequestionnavigate = () => {
    navigate("/questions");
  };

  return (
    <div
      className="flex justify-between items-center  rounded-3xl p-4 my-4"
      style={{
        background:
          "linear-gradient(115.93deg, rgba(217, 217, 217, 0.152) 19.7%, rgba(115, 115, 115, 0.019) 139.96%)",
      }}
    >
      <div className="flex">
        <img
          src={`../images/${img}.png`}
          alt=""
          className="w-16 h-12 lg:mr-8 mr-2"
        />
        <div>
          <h3 className="font-bold lg:text-xl text-xs ">{course}</h3>
          <div>{topic}</div>
        </div>
      </div>
      <div>
        {play ? (
          <PlayCircleOutlineIcon
            fontSize="large"
            onClick={handlevideonavigate}
            className="cursor-pointer"
          />
        ) : (
          <CodeIcon
            fontSize="large"
            onClick={handlequestionnavigate}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default PostloginCourseCard;
