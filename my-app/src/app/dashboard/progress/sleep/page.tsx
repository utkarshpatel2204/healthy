'use client';
import React, { useEffect, useState } from 'react';

interface SleepData {
  bedTime: string;
  wakeUpTime: string;
}

const SleepTracker: React.FC = () => {
  const [sleep, setSleep] = useState<SleepData | null>(null);

  // Fetch data from JSON
  useEffect(() => {
    const fetchSleepData = async () => {
      try {
        const response = await fetch('/users.json'); // Ensure the file is in the `public` folder
        const data = await response.json();
        setSleep(data.sleep); // Assuming "data.sleep" contains { bedTime, wakeUpTime }
      } catch (error) {
        console.error('Error fetching sleep data:', error);
      }
    };

    fetchSleepData();
  }, []);

  if (!sleep) {
    return <p>Loading...</p>; // Loading state
  }

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-8">
      <h1 className="text-center text-lg font-semibold mb-6">
        Select bed and wakeup time to track sleep
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bed Time Section */}
        <div className="w-full flex flex-col lg:flex-row items-center border rounded-lg shadow-md p-6 space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex-shrink-0">
            <img
              src="/images/moon.png"
              alt="Moon"
              className="w-24 h-24 mb-4 lg:mb-0"
            />
            <h2 className="text-lg text-center">Bed Time</h2>
            <p className="text-xl font-bold text-center">{sleep.bedTime}</p>
          </div>

          <div className="w-full">
            <p className="text-sm font-semibold mb-4">Bed Time</p>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <input
                  maxLength={2}
                  className="border-[#00633A] border-2 rounded w-20 h-16 text-3xl text-center"
                  placeholder="00"
                  defaultValue={parseInt(sleep.bedTime.split(':')[0])}
                />
                <p className="mt-2">Hour</p>
              </div>

              <p className="text-3xl">:</p>

              <div className="text-center">
                <input
                  maxLength={2}
                  className="rounded w-20 h-16 text-3xl bg-gray-100 text-center"
                  placeholder="00"
                  defaultValue={parseInt(sleep.bedTime.split(':')[1])}
                />
                <p className="mt-2">Minute</p>
              </div>

              <div>
                <div className="w-16 h-16 border-2 rounded overflow-hidden">
                  <button
                    value="AM"
                    className="w-full h-1/2 hover:bg-[#00633A] hover:text-white"
                  >
                    AM
                  </button>
                  <button
                    value="PM"
                    className="w-full h-1/2 hover:bg-[#00633A] hover:text-white"
                  >
                    PM
                  </button>
                </div>
              </div>
            </div>

            <button className="mt-4 flex items-center justify-center bg-[#00633A] w-full h-12 text-white rounded-lg space-x-2">
              <p>Update Sleep Data</p>
              <img src="/svg/upload.svg" alt="" />
            </button>
          </div>
        </div>

        {/* Wake Up Time Section */}
        <div className="w-full flex flex-col lg:flex-row items-center border rounded-lg shadow-md p-6 space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex-shrink-0">
            <img
              src="/images/sunrise.png"
              alt="Sunrise"
              className="w-24 h-24 mb-4 lg:mb-0"
            />
            <h2 className="text-lg text-center">Wake Up Time</h2>
            <p className="text-xl font-bold text-center">{sleep.wakeUpTime}</p>
          </div>

          <div className="w-full">
            <p className="text-sm font-semibold mb-4">Wake Up Time</p>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <input
                  maxLength={2}
                  className="border-[#00633A] border-2 rounded w-20 h-16 text-3xl text-center"
                  placeholder="00"
                  defaultValue={parseInt(sleep.wakeUpTime.split(':')[0])}
                />
                <p className="mt-2">Hour</p>
              </div>

              <p className="text-3xl">:</p>

              <div className="text-center">
                <input
                  maxLength={2}
                  className="rounded w-20 h-16 text-3xl bg-gray-100 text-center"
                  placeholder="00"
                  defaultValue={parseInt(sleep.wakeUpTime.split(':')[1])}
                />
                <p className="mt-2">Minute</p>
              </div>

              <div>
                <div className="w-16 h-16 border-2 rounded overflow-hidden">
                  <button
                    value="AM"
                    className="w-full h-1/2 hover:bg-[#00633A] hover:text-white"
                  >
                    AM
                  </button>
                  <button
                    value="PM"
                    className="w-full h-1/2 hover:bg-[#00633A] hover:text-white"
                  >
                    PM
                  </button>
                </div>
              </div>
            </div>

            <button className="mt-4 flex items-center justify-center bg-[#00633A] w-full h-12 text-white rounded-lg space-x-2">
              <p>Update Sleep Data</p>
              <img src="/svg/upload.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleepTracker;