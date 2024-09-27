import React, { useState } from "react";

const ActivityGrid = ({ daysActive, monthName }) => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    color: "",
  });

  const handleMouseEnter = (isActive, date) => {
    if (isActive) {
      setTooltip({
        visible: true,
        content: `Contribution on ${monthName} ${date + 1}`,
        color: "text-green-500",
      });
    } else {
      setTooltip({
        visible: true,
        content: `No contribution on ${monthName} ${date + 1}`,
        color: "text-black",
      });
    }
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, content: "", color: "" });
  };

  return (
    <div className="relative flex flex-col items-center ml-4">
      <style>
        {`
          .activity-tooltip {
            position: absolute;
            background-color: #333;
            color: #fff;
            padding: 4px 8px;
            border-radius: 4px;
            z-index: 10;
            transition: opacity 0.2s ease;
            margin-top: 0.5rem;
            font-size: 0.75rem; /* Smaller text */
          }
        `}
      </style>

      <div
        className="grid grid-cols-10 gap-1 lg:gap-3 md:gap-3 sm:gap-1 sm:grid-cols-10 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7"
        style={{ width: "90%" }}
      >
        {daysActive.map((isActive, index) => (
          <div
            key={index}
            className={`w-2 h-2 sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-3 lg:h-3 xl:w-3 xl:h-3 rounded-sm ${
              isActive ? "bg-green-500" : "bg-gray-700"
            }`}
            onMouseEnter={() => handleMouseEnter(isActive, index)}
            onMouseLeave={handleMouseLeave}
          ></div>
        ))}
      </div>
      <span className="mt-2 text-orange-600 text-sm">
        {monthName.toUpperCase()}
      </span>
      {tooltip.visible && (
        <div className={`activity-tooltip ${tooltip.color}`}>
          {tooltip.content}
        </div>
      )}
    </div>
  );
};

export default ActivityGrid;
