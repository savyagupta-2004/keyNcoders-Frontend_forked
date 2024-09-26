import React from "react";
import ActivityGrid from "../components/ActivityGrid"
import PostloginNavbar from "../utilities/PostloginNavbar";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const UserProfile = ({ theme, handleThemeSwitch }) => {
  let percentage=75;
  const activities = [
    {
      monthName: 'March',
      daysActive: [
        true, false, true, true, false, true, true, false, true, false, 
        false, true, false, false, true, true, false, true, true, true, 
        false, true, true, false, false, true, true, true, true, false
      ],
    },
    {
      monthName: 'April',
      daysActive: [
        false, true, false, false, true, true, false, false, true, true, 
        false, true, true, false, true, true, true, false, false, true, 
        false, false, true, true, true, false, true, true, false, true
      ],
    },
    {
      monthName: 'May',
      daysActive: [
        true, true, false, true, false, true, true, false, true, true, 
        true, false, true, false, false, true, true, false, true, true, 
        false, true, false, false, true, true, true, false, true, true
      ],
    },
    {
      monthName: 'June',
      daysActive: [
        true, true, false, true, false, true, true, false, true, true, 
        true, false, true, false, false, true, true, false, true, true, 
        false, true, false, false, true, true, true, false, true, true
      ],
    },
  ];
  return (
    <div
      className={`flex flex-col h-screen w-screen ${
        theme === "dark"
          ? "bg-[#131313] text-white"
          : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] text-black"
      }`}
    >
      <div>
        <PostloginNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      </div>
      <div className="flex flex-row flex-grow bg-red-500 mt-[62px]">
      <div className="bg-green-100 flex flex-col flex-grow   w-[1030px]">
      <div className="bg-yellow-100 flex-grow flex h-[232px]">
        <div className="flex-[33%]  flex-grow flex justify-center items-center px-2 bg-gray-900">
        <div className="flex flex-col flex-grow rounded-xl" style={{ background: 'linear-gradient(to bottom right, #808080, #000000)' }}>
          <div className="flex flex-row flex grow">
            <div className="flex-[30%] m-2"> <CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(25, 218, 25, ${percentage / 100})`,
    textColor: 'white',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/></div>
<div className="flex-[70%] flex justify-center items-center text-lg"> 
  <span>CONSISTENCY</span> 
  <span className="text-orange-500 ml-1 text-lg">{"75%"}</span>
</div>
            
            
             </div>

  <div className="flex flex-row flex grow" >
            <div className="flex-[30%] m-2"> <CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(25, 218, 25, ${percentage / 100})`,
    textColor: 'white',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/></div>
<div className="flex-[70%] flex justify-center items-center text-lg"> 
  <span>ASSIGNMENTS</span> 
  <span className="text-orange-500 ml-1 text-lg">{"75%"}</span>
</div>
            
            
             </div>
          <div className="flex flex-row flex grow"> </div>



        </div>

        </div>
        <div className="flex-[66%] flex-grow bg-red-200"> </div>

      </div>
  <div className=" bg-grey-500 flex-grow  h-[321 px] flex justify-center items-center"> <div 
  className=" min-w-[1030px] overflow-auto bg-gray-900 flex flex-col justify-center items-center h-[321px] p-10 rounded-xl mx-8 w-auto"
  style={{ background: 'linear-gradient(to bottom right, #808080, #000000)' }}
>
<div className="flex flex-row justify-center items-center space-x-8 text-white text-lg">
        <div className="flex flex-col items-center">
          <span>TOTAL ACTIVE DAYS: <span className="text-orange-600">21</span></span>
        </div>
        <div className="flex flex-col items-center">
          <span>STREAK: <span className="text-orange-600">15</span></span>
        </div>
        <div className="flex flex-col items-center">
          <span>🏆 <span className="text-orange-600">25</span></span>
        </div>
      </div>
  <div className="flex flex-row">
  {activities.map((activity, index) => (
    <div key={index} className="flex flex-col items-center">
      <ActivityGrid 
        daysActive={activity.daysActive} 
        monthName={activity.monthName} 
      />
    </div>
  ))} </div>
</div> </div>
      <div className="bg-brown-100 flex-grow  h-[240px]"></div>
      </div>
        <div className="bg-blue-100 flex-grow  w-[345px]"> 1</div>
        
      </div>
    </div>
  );
};

export default UserProfile;
