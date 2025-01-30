'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface WeightData {
  currentWeight: number;
  weightGoal: number;
}

const weight = () => {
  const [weight, setWeight] = useState<WeightData | null>(null);

  // Fetch data from JSON
  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await fetch('/users.json'); // Ensure the file is in the `public` folder
        const data = await response.json();
        setWeight(data.weight);
      } catch (error) {
        console.error('Error fetching steps data:', error);
      }
    };
    fetchSteps();
  }, []);

  return (
    <div>
      <div className='flex flex-col lg:flex-row w-full lg:w-[1120px] h-auto md:h-[423px] text-center justify-between mt-[40px] md:mt-[80px] items-center gap-[20px] md:gap-0 px-4 md:px-0'>
        {/* Current Weight Section */}
        <div className='w-full md:w-[515px] h-auto md:h-[423px]'>
          <Image
            src='/images/weight1.png'
            alt=''
            width={188}
            height={188}
            className='mx-auto md:ml-[200px] items-center'
          />
          <div className='flex justify-between mt-[17px] mb-[17px]'>
            <p className='font-semibold text-[20px] leading-[24px]'>Current weight</p>
            <p className='text-[25px] leading-[24px] font-semibold text-[#00633A]'>
              {weight?.currentWeight} <span className='text-[14px]'>Kg</span>
            </p>
          </div>
          <div className='w-full md:w-[515px] h-auto'>
            <div>
              <p className='text-start text-[12px] '>Current Weight</p>
            </div>
            <div>
              <input
                type='text'
                className='px-[10px] w-full mt-[10px] md:w-[515px] h-[56px] border-[#00633A] border-[1px] rounded-[10px] mb-[17px]'
              />
            </div>
            <button className='w-full md:w-[515px] h-[56px] bg-[#00633A] rounded-[10px] text-white font-semibold text-[18px] leading-[23px]'>
              Update Weight
            </button>
          </div>
        </div>

        {/* Target Weight Section */}
        <div className='w-full md:w-[515px] h-auto md:h-[423px]'>
          <Image
            src='/images/weight2.png'
            alt=''
            width={188}
            height={188}
            className='mx-auto md:ml-[200px] items-center'
          />
          <div className='flex justify-between mt-[17px] mb-[17px]'>
            <p className='font-semibold text-[20px] leading-[24px]'>Target Weight</p>
            <p className='text-[25px] leading-[24px] font-semibold text-[#00633A]'>
              {weight?.weightGoal} <span className='text-[14px]'>Kg</span>
            </p>
          </div>
          <div className='w-full md:w-[515px] h-auto'>
            <div>
              <p className='text-start text-[12px]'>Weight Goal</p>
            </div>
            <div>
              <input
                type='text'
                className='px-[10px] w-full mt-[10px] md:w-[515px] h-[56px] border-[#00633A] border-[1px] rounded-[10px] mb-[17px]'
              />
            </div>
            <button className='w-full md:w-[515px] h-[56px] bg-[#00633A] rounded-[10px] text-white font-semibold text-[18px] leading-[23px]'>
              Update Weight
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default weight;
