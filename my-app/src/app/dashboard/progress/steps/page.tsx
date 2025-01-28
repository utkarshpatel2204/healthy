'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface StepsData {
  walkingSteps: number;
  stepsGoal: number;
}

const StepTracker = () => {
  const [steps, setSteps] = useState<StepsData | null>(null);

  // Fetch data from JSON
  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await fetch('/users.json'); // Ensure the file is in the `public` folder
        const data = await response.json();
        setSteps(data.steps);
      } catch (error) {
        console.error('Error fetching steps data:', error);
      }
    };

    fetchSteps();
  }, []);

  // Calculate percentage
  const percentage = steps
    ? Math.min((steps.walkingSteps / steps.stepsGoal) * 100, 100).toFixed(0)
    : 0;

  return (
    <div className="flex flex-col items-center text-center mt-10 px-4">
      {steps ? (
        <>
          <h1 className="text-[20px] sm:text-[26px] leading-[31px] font-semibold">
            You have walked{' '}
            <span className="text-green-500">{percentage}%</span> of your goal
          </h1>
          <div className="relative mt-6 w-[220px] h-[220px] sm:w-[289px] sm:h-[289px]">
            {/* Circular Progress */}
            <div
              className="w-full h-full rounded-full flex items-center justify-center bg-white shadow-lg shadow-[#3754AA33]"
              style={{
                background: `conic-gradient(#FFC107 ${percentage}%, #E0E0E0 ${percentage}%)`,
              }}
            >
              {/* Inner Circle */}
              <div className="w-[180px] h-[180px] sm:w-[241px] sm:h-[241px] bg-white rounded-full flex flex-col items-center justify-center">
                <Image src="/images/steps.png" alt="" width={50} height={50}></Image>
                <p className="text-[40px] sm:text-[60px] leading-[50px] sm:leading-[73px] font-bold text-yellow-500">
                  {steps.walkingSteps.toLocaleString()}
                </p>
                <p className="text-black font-medium text-xs sm:text-sm text-center leading-[17px] tracking-[20%]">
                  GOAL{' '}
                  <span className="font-bold">
                    {steps.stepsGoal.toLocaleString()} {' '}
                  </span>
                  STEPS
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1120px] mt-[50px] ">
            <p className="text-start">Select your goal</p>
            <div className="flex flex-col sm:flex-row justify-between mt-[20px] gap-4">
              <div>
                <input
                  type="text"
                  className="px-[10px] w-full sm:w-[648px] h-[56px] border-[#00633A] border-[1px] rounded-[10px]"
                />
              </div>
              <div className="w-full sm:w-[442px] h-[58px] rounded-[10px] bg-[#00633A]">
                <button className="flex justify-center items-center gap-[10px] w-full h-full text-center text-white py-[15px] text-[18px] leading-[23px]">
                  Update Goal
                  <Image src="/svg/upload.svg" alt="" width={21} height={21} className="" />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StepTracker;
