'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

const Side = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar visibility state
  const pathname = usePathname();

  const menuItems = [
    { href: '/dashboard/home', label: 'Home', icon: '/svg/home.svg' },
    { href: '/dashboard/progress', label: 'Progress', icon: '/svg/sidebar1.svg' },
    { href: '/dashboard/fitness', label: 'Fitness Sessions', icon: '/svg/sidebar2.svg' },
    { href: '/dashboard/favourites', label: 'Favourites', icon: '/svg/sidebar3.svg' },
    { href: '/dashboard/orders', label: 'Orders', icon: '/svg/sidebar4.svg' },
    { href: '/dashboard/account', label: 'Account', icon: '/svg/sidebar5.svg' },
  ];

  const handleMenuClick = () => {
    // Close sidebar on menu item click (small screens only)
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="fixed top-8 left-3 z-20 block md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Image src="/svg/hamburger.svg" alt="Menu" width={30} height={30} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-[90px] lg:top-0 left-0 h-screen w-[260px] bg-white shadow-2xl transform transition-transform duration-300 z-10 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex w-[260px] h-[95px] pl-[22px] gap-[10px]">
          <Image src="/svg/logo.svg" alt="" width={47} height={47} />
          <h1 className="text-[16px] leading-[24px] text-[#222222] w-[109px] h-[24px] mt-[35.5px]">
            Healthy Tiffin
          </h1>
        </div>
        <div className="flex gap-[10px] w-[260px] h-[34px] my-[7px]">
          <Image src="/svg/line1.svg" alt="" width={14} height={0} />
          <p className="text-[12px] leading-[19.9px] tracking-[0.4px] text-[#3A354161] font-urbanist mt-[7px]">
            Menu
          </p>
          <Image src="/svg/line2.svg" alt="" width={158} height={0} />
        </div>
        {menuItems.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            onClick={handleMenuClick} // Close sidebar on click
            className={`flex w-[252px] h-[42px] gap-[20px] mb-[10px] pl-[21px] rounded-tr-[50px] rounded-br-[50px] ${
              pathname === href ? 'bg-orange' : 'hover:bg-orange'
            }`}
          >
            <Image src={icon} width={22} height={22} alt="" />
            <div className="py-[8px] w-[175px] h-[32px]">
              <p
                className={`text-[#878787] hover:text-black ${
                  pathname === href ? 'text-black' : 'hover:text-black'
                }`}
              >
                {label}
              </p>
            </div>
          </Link>
        ))}
      </aside>
    </>
  );
};

export default Side;
