'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// Define the type for the order data
interface Order {
  image: string;
  details: {
    title: string;
    orderTotal: {
      amount: number;
    };
    status: string;
    timestamps: {
      orderPlaced: {
        date: string;
        time: string;
      };
      delivered: {
        date: string;
        time: string;
      };
    };
  };
}

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  // Fetch orders from a JSON file or API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/users.json'); // Update this path for your actual API or JSON file
        const data = await response.json();
        setOrders(data.orders || []); // Ensure data matches your expected structure
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="w-full max-w-[1120px]  mx-auto">
      <div>
        <h1 className="text-[24px] leading-[24px] mb-[30px]">Orders</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {orders.map((order, index) => (
            <div
              key={index}
              className="flex w-full p-[15px] bg-white h-auto sm:h-[239px] gap-[30px] rounded-[10px] shadow-xl shadow-[#00000026] flex-col sm:flex-row"
            >
              <div>
                {order.image ? (
                  <img
                    src={order.image}
                    alt="Favourite image"
                    className="rounded-md w-full sm:w-[191px] h-[209px] object-cover"
                  />
                ) : (
                  <div className="w-full sm:w-[191px] h-[209px] bg-gray-200 flex items-center justify-center">
                    <p>No Image</p>
                  </div>
                )}
              </div>
              <div className="w-full sm:w-[203px] h-auto sm:h-[209px]">
                <h1 className="text-[18px] leading-[18px] font-semibold mb-[28px] mt-[25px]">
                  {order.details?.title || 'No title'}
                </h1>
                <p className="text-[#00633A] text-[16px] leading-[16px] mb-[10px]">
                  Order total: <span className="font-semibold">${order.details?.orderTotal.amount || 0}</span>
                </p>
                <p className="text-[14px] text-[#FEAE0D] mb-[15px]">{order.details?.status || 'No status'}</p>
                <p className="text-[12px] font-medium text-[#BFBFBF] mb-[15px]">
                  Order: {order.details?.timestamps.orderPlaced.date || 'N/A'} |{' '}
                  {order.details?.timestamps.orderPlaced.time || 'N/A'}
                </p>
                <p className="text-[12px] font-medium text-[#BFBFBF]">
                  Delivered: {order.details?.timestamps.delivered.date || 'N/A'} |{' '}
                  {order.details?.timestamps.delivered.time || 'N/A'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
