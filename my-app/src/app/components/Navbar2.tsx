'use client';
import Image from 'next/image';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center w-full md:w-[calc(100%-260px)] h-[95px] bg-orange fixed top-0 left-0 md:left-[260px] text-white shadow-md z-10">
      {/* Hamburger Button Space */}
      <div className="ml-[60px] md:ml-[30px] my-[27.5px] flex items-center gap-[15px]">
        <Image src="/images/avatar.png" alt="Avatar" width={40} height={40} />
        <h1 className="text-[16px] font-semibold">Hello Sam!</h1>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-[24px] mr-[30px]">
        <button>
          <Image src="/svg/cart.svg" alt="Cart" width={24} height={24} />
        </button>
        <button>
          <Image src="/svg/notification.svg" alt="Notifications" width={24} height={24} />
        </button>
        <button>
          <Image src="/svg/logout.svg" alt="Logout" width={24} height={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
