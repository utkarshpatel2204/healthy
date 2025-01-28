'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface CaloriesData {
  breakfast: number;
  lunch: number;
  dinner: number;
  snack: number;
}

const Calories = () => {
  const [calories, setCalories] = useState<CaloriesData | null>(null);


  useEffect(() => {
    const fetchCalories = async () => {
      try {
        const response = await fetch('/users.json'); 
        const data = await response.json();
        setCalories(data.calories);
      } catch (error) {
        console.error('Error fetching calories data:', error);
      }
    };
    fetchCalories();
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-[1120px] p-6 shadow-2xl rounded-[20px] bg-white">
        <h1 className="text-[24px] leading-[24px] font-medium mb-6 text-start">Calories Tracker</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-[14px] mb-2 text-start">Breakfast Calorie</p>
            <input
              type="text"
              placeholder={String(calories?.breakfast)}
              className="w-full h-[56px] border-[1px] border-[#00633A] rounded-[10px] pl-3"
            />
          </div>
          <div>
            <p className="text-[14px] mb-2 text-start">Lunch Calorie</p>
            <input
              type="text"
              placeholder={String(calories?.lunch)}
              className="w-full h-[56px] border-[1px] border-[#00633A] rounded-[10px] pl-3"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-[14px] mb-2 text-start">Snack Calorie</p>
            <input
              type="text"
              placeholder={String(calories?.snack)}
              className="w-full h-[56px] border-[1px] border-[#00633A] rounded-[10px] pl-3"
            />
          </div>
          <div>
            <p className="text-[14px] mb-2 text-start">Dinner Calorie</p>
            <input
              type="text"
              placeholder={String(calories?.dinner)}
              className="w-full h-[56px] border-[1px] border-[#00633A] rounded-[10px] pl-3"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button className="w-full h-[56px] bg-[#FEAE0D] rounded-[10px] text-black font-semibold">
            Total Calories
          </button>
          <button className="w-full h-[56px] bg-[#00633A] rounded-[10px] text-white flex justify-center items-center gap-2 font-semibold">
            Update Goal
            <Image src="/svg/upload.svg" alt="Upload" width={21} height={21} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calories;
