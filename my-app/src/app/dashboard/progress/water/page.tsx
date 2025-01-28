'use client';

import React, { useEffect, useState } from 'react';

const WaterTracker = () => {
  const [waterGoal, setWaterGoal] = useState<number | null>(null); // Initial state for water goal
  const [selectedPeriod, setSelectedPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [glassCount, setGlassCount] = useState<number | null>(null); // Dynamic glass count

  // Fetch data from JSON
  useEffect(() => {
    const fetchWaterData = async () => {
      try {
        const response = await fetch('/users.json'); // Ensure this file is in the public folder
        const data = await response.json();

        // Extract water value from the JSON
        const waterValue = data.water;
        setWaterGoal(waterValue); // Set the daily water goal
        setGlassCount(waterValue); // Initialize glassCount with the daily water goal
      } catch (error) {
        console.error('Error fetching water data:', error);
      }
    };

    fetchWaterData();
  }, []);

  // Update glass count based on selected period
  useEffect(() => {
    if (waterGoal !== null) {
      if (selectedPeriod === 'daily') setGlassCount(waterGoal);
      else if (selectedPeriod === 'weekly') setGlassCount(waterGoal * 7);
      else if (selectedPeriod === 'monthly') setGlassCount(waterGoal * 30);
    }
  }, [selectedPeriod, waterGoal]);

  const handlePeriodChange = (period: 'daily' | 'weekly' | 'monthly') => {
    setSelectedPeriod(period);
  };

  return (
    <div className="flex flex-col mt-[40px] p-6">
      <div className="flex space-x-4 mb-6 flex-wrap ">
        <button
          className={`px-4 py-2 rounded ${selectedPeriod === 'daily' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
          onClick={() => handlePeriodChange('daily')}
        >
          Today
        </button>
        <button
          className={`px-4 py-2 rounded ${selectedPeriod === 'weekly' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
          onClick={() => handlePeriodChange('weekly')}
        >
          Weekly
        </button>
        <button
          className={`px-4 py-2 rounded ${selectedPeriod === 'monthly' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
          onClick={() => handlePeriodChange('monthly')}
        >
          Monthly
        </button>
      </div>

      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex flex-col  ">
          <img src="/svg/water.svg" alt="Drink Water" className="w-[297px] h-[297px]" />
        </div>
        <div className="w-full md:w-[402px] h-[297px] items-center flex flex-col bg-white shadow-lg rounded-lg p-6">
          <p className="text-3xl font-bold">{glassCount !== null ? glassCount : 'Loading...'}</p>
          <p className="text-lg">
            {selectedPeriod === 'daily'
              ? 'Daily goal'
              : selectedPeriod === 'weekly'
              ? 'Weekly goal'
              : 'Monthly goal'}:{' '}
            <span className="font-semibold">{`${glassCount !== null ? glassCount : 0} glasses`}</span>
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <button
              className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 font-bold"
              onClick={() => setGlassCount((prev) => (prev !== null ? Math.max(prev - 1, 0) : 0))}
            >
              -
            </button>
            <img src="/svg/glass.svg" alt="Glass Icon" className="w-[130px] h-[130px]" />
            <button
              className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 font-bold"
              onClick={() => setGlassCount((prev) => (prev !== null ? prev + 1 : 0))}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="goal" className="block text-lg font-medium mb-2">
          Select your Goal
        </label>
        <select
          id="goal"
          className="w-full text-[12px] md:w-[729px] px-4 py-2 border rounded-lg"
        >
          <option value={10}>10 Glasses</option>
          <option value={20}>20 Glasses</option>
          <option value={30}>30 Glasses</option>
        </select>
      </div>

      <button className="mt-4 px-6 py-2 w-full md:w-[729px] bg-green-700 text-white rounded-lg" onClick={() => console.log('Updated Goal:', glassCount)}>
        Update Goal
      </button>
    </div>
  );
};

export default WaterTracker;
