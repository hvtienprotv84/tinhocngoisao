import React, { useState, useEffect } from "react";

const Countdown = () => {
  const initialTime = 2 * 24 * 60 * 60; // Đếm ngược 2 ngày, tính bằng giây
  const [time, setTime] = useState(
    parseInt(localStorage.getItem("countdownTime")) || initialTime
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("countdownTime", time.toString());
  }, [time]);

  const formatTime = (value) => {
    return value.toString().padStart(2, "0");
  };

  const days = Math.floor(time / (24 * 60 * 60));
  const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = Math.floor(time % 60);

  const formattedDays = formatTime(days);
  const formattedHours = formatTime(hours);
  const formattedMinutes = formatTime(minutes);
  const formattedSeconds = formatTime(seconds);

  const dayText = formattedDays === "01" ? "Ngày" : "Ngày";
  const hourText = formattedHours === "01" ? "Giờ" : "Giờ";
  const minuteText = formattedMinutes === "01" ? "Phút" : "Phút";
  const secondText = formattedSeconds === "01" ? "Giây" : "Giây";

  return (
    <div className=" flex-row justify-center items-center h-screen ml-[135px] sm:mt-[220px] hidden sm:inline-flex">
      <div className="text-[12px] ml-[50px] font-bold bg-white pl-[5px] pr-[5px] w-[40px] h-[40px] rounded-[5px] text-center">
        {formattedDays}
        <div className="font-normal pb-[2px]">{dayText}</div>
      </div>

      <div className="text-[12px] ml-[5px] font-bold bg-white p-[5px] rounded-[5px] w-[40px] h-[40px] text-center">
          <div className="mt-[-5px]">{formattedHours}</div>
          <div className="font-normal pb-[2px] mt-[-5px] pt-[5px]">{hourText}</div>
        </div>

        <div className="text-[12px] ml-[5px] font-bold bg-white p-[5px] rounded-[5px] w-[40px] h-[40px] text-center">
          <span className="block mt-[-5px]">
            {formattedMinutes}
            <div className="font-normal pb-[2px] mt-[-5px] pt-[5px]">{minuteText}</div>
          </span>
        </div>

        <div className="text-[12px] ml-[5px] font-bold bg-white p-[5px] rounded-[5px] w-[40px] h-[40px] text-center">
          <span className="block mt-[-5px]">
            {formattedSeconds}
            <div className="font-normal pb-[2px] mt-[-5px] pt-[5px]">{secondText}</div>
          </span>
        </div>
      </div>

  );
};

export default Countdown;