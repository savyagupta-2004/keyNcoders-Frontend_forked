import React from 'react';

const ActivityGrid = ({ daysActive, monthName }) => {
  const daysInMonth = daysActive.length;

  return (
    <div className="flex flex-col items-center ml-4" >
      <div className="grid grid-cols-7 gap-1" style={{ width: '100%'}}>
        {daysActive.map((isActive, index) => (
          <div
            key={index}
            className={`w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-sm ${
              isActive ? 'bg-green-500' : 'bg-gray-700'
            }`}
          ></div>
        ))}
      </div>
      <span className="mt-2 text-orange-600 text-sm">{monthName.toUpperCase()}</span>
    </div>
  );
};

export default ActivityGrid;
