'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// Define the type for the favourite data
interface Favourites {
  image: string;
  details: string[];
  title: string;
  calories: number;
  price: number;
  topic: string[];
}

const Favourites = () => {
  const [favourites, setFavourites] = useState<Favourites[]>([]);

  // Fetch orders from a JSON file or API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/users.json'); // Update this path for your actual API or JSON file
        const data = await response.json();
        setFavourites(data.favourites || []); // Ensure data matches your expected structure
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="max-w-[1120px] mx-auto p-4">
      <div>
        <h1 className="text-[24px] leading-[24px] mb-[30px]">Favourites</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {favourites.map((favourite, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row bg-white rounded-[10px] shadow-xl shadow-[#00000026] p-4 gap-4"
            >
              <div className="flex-shrink-0">
                {favourite.image ? (
                  <img
                    src={favourite.image}
                    alt="Favourite image"
                    className="rounded-md w-full sm:w-[191px] h-[273px] object-cover"
                  />
                ) : (
                  <div className="w-full sm:w-[191px] h-[273px] bg-gray-200 flex items-center justify-center rounded-md">
                    <p>No Image</p>
                  </div>
                )}
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h1 className="text-[18px] leading-[18px] font-semibold">{favourite?.title || 'No title'}</h1>
                  <div className="flex gap-3">
                    <Image src="/svg/share.svg" width={30} height={30} alt="Share" />
                    <Image src="/svg/like.svg" width={30} height={30} alt="Like" />
                  </div>
                </div>
                <p className="text-[#00633A] text-[25px] font-semibold leading-[25px] mb-4">
                  {favourite.calories}
                  <span className="font-normal text-[12px] leading-[12px] ml-1">CALORIES</span>
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {favourite.topic.map((topic, index) => (
                    <span key={index} className="bg-[#00633A] text-white px-3 py-1 rounded-full text-[12px]">
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="text-[14px] leading-[17px] font-medium text-[#BFBFBF] mb-4">
                  {favourite.details.map((detail, index) => (
                    <div key={index} className="mb-2">
                      {detail}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[22px] leading-[28px] font-semibold text-[#00633A]">${favourite.price}</p>
                  <p className="text-[#FEAE0D] text-[16px] leading-[28px]">PROTEIN</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
