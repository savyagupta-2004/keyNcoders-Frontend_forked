import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({ label, value,width }) => {
  const renderText = (value, label) => (
    <>
      <tspan x="50%" dy="-0.65em">{`${value}%`}</tspan>
      <tspan x="50%" dy="1.2em">{label}</tspan>
    </>
  );

  return (
    <div style={{ backgroundColor: "black", borderRadius: "50%", width: `${width}px`, margin: "0 20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)" }}>
      <CircularProgressbar
        value={value}
        text={renderText(value, label)}
        styles={buildStyles({
          pathColor: `rgb(241, 74, 22)`,
          textColor: "white",
          trailColor: "black",
          textSize: '14px', // Adjust this to fit both lines properly
        })}
      />
    </div>
  );
};

export default CircularProgress;
