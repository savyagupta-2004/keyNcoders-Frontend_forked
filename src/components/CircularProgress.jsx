import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({ label, value, width, textColor }) => {
  const renderText = (value, label) => (
    <>
      <tspan x="50%" dy="-0.65em">{`${value}%`}</tspan>
      <tspan x="50%" dy="1.2em">
        {label}
      </tspan>
    </>
  );

  return (
    <div
      style={{
        borderRadius: "50%",
        width: `${width}px`,
        height: `${width}px`,
      }}
    >
      <CircularProgressbar
        value={value}
        text={renderText(value, label)}
        styles={buildStyles({
          pathColor: `rgb(249, 115, 22)`,
          textColor: `${textColor}`,
          trailColor: "black",
          textSize: "14px", // Adjust this to fit both lines properly
        })}
      />
    </div>
  );
};

export default CircularProgress;
