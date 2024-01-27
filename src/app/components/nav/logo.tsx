'use client'


import { faD } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { useState, useEffect } from 'react';

export default function LittleLogo() {
  const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do, YYYY | h:mm A'));


  useEffect(() => {
    // Update the time every minute (or every second if you prefer)
    const interval = setInterval(() => {
      setCurrentTime(moment().format('MMMM Do, YYYY | h:mm A'));
    }, 60000); // 60000 ms = 1 minute; change to 1000 ms for every second

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="m-[10px] flex flex-row">
        {/* Icon */}
        <FontAwesomeIcon className="w-[60px] h-[60px] rounded-[50%]" icon={faD} color="#37cbdf" />
        <div className="w-fit h-fit flex-column p-2"> 
            <p className="text-[#eee] text-xl">LittleLives Consult</p>
            <p className="text-[#868686] text-xs">{currentTime}</p>
        </div>
    </div>
  );
}
