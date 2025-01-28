// 'use client'
// import React, { ReactNode, useState } from "react";
// import { useRouter } from "next/navigation";

// import Image from "next/image";
// import Link from "next/link";

// interface FitnessLayoutProps {
//   children: ReactNode;
// }

// const FitnessGoal: React.FC<FitnessLayoutProps> = ({ children }) => {
//   const router = useRouter();
//   const [selectedTracker, setSelectedTracker] = useState(router.pathname);

//   const trackers = [
//     {
//       name: "Weight",
//       href: "/dashboard/progress/weight",
//       bgColor: "#0026881A",
//       textColor: "#002688",
//       imageSrc: "/images/weight.png",
//       value: "70 Kg",
//     },
//     {
//       name: "Steps",
//       href: "/dashboard/progress/steps",
//       bgColor: "#00A3651A",
//       textColor: "#00A365",
//       imageSrc: "/images/steps.png",
//       value: "120",
//     },
//     {
//       name: "Sleep",
//       href: "/dashboard/progress/sleep",
//       bgColor: "#9100FF1A",
//       textColor: "#9100FF",
//       imageSrc: "/images/sleep.png",
//       value: "10 hrs",
//     },
//     {
//       name: "Calories",
//       href: "/dashboard/progress/calories",
//       bgColor: "#FF95281A",
//       textColor: "#FF9528",
//       imageSrc: "/images/calories.png",
//       value: "60 Cal",
//     },
//     {
//       name: "Water",
//       href: "/dashboard/progress/water",
//       bgColor: "#35AAFF1A",
//       textColor: "#35AAFF",
//       imageSrc: "/images/water.png",
//       value: "8 Glasses",
//     },
//   ];

//   return (
//     <div className="ml-[290px] mt-[140px] text-[24px] leading-[24px] w-[1130px] h-[200px]">
//       <div>
//         <div className="mb-4 text-2xl font-medium w-[268px] h-[30px] text-[24px] leading-[24px]">
//           Trackers and Goals
//         </div>
//         <div className="flex h-[168px] px-[24px] justify-between rounded-[24px] shadow-2xl items-center">
//           {trackers.map((tracker) => (
//             <Link
//               key={tracker.name}
//               href={tracker.href}
//               className={`flex items-center w-[193px] h-[118px] rounded-[20px] p-4`}
//               onClick={() => setSelectedTracker(tracker.href)}
//               style={{ backgroundColor: tracker.bgColor }}
//             >
//               <div>
//                 <Image
//                   src={tracker.imageSrc}
//                   alt={`${tracker.name} Icon`}
//                   width={49}
//                   height={40}
//                   className="mr-5"
//                 />
//               </div>
//               <div className="w-[75px] h-[78px]">
//                 <p
//                   className={`text-lg font-bold text-[23.54px] leading-[28.69px] ${tracker.textColor}`}
//                 >
//                   {tracker.value}
//                 </p>
//                 <p className="text-[19.61px] text-black text-center leading-[23.91px] font-semibold w-[75px] h-[24px] pt-[5px]">
//                   {tracker.name}
//                 </p>
//                 <p className="text-[12px] leading-[14px] text-[#9F9F9F] font-bold w-[53px] h-[15px] pt-[10px]">
//                   UPDATE
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//       {/* Dynamic Content */}
//       <div className="mt-6">{children}</div>
//     </div>
//   );
// };

// export default FitnessGoal;
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface FitnessLayoutProps {
  children: ReactNode;
}

const Fitnessgoal: React.FC<FitnessLayoutProps> = ({ children }) => {
  return (
    <div className="text-[24px] leading-[24px] w-full lg:w-[1130px] mx-auto h-auto lg:h-[200px] px-4 lg:px-0">
      {/* Main Content */}
      <div>
        <div className="mb-4 text-2xl font-medium lg:w-[268px] lg:h-[30px] text-[24px] leading-[24px]">
          Trackers and Goals
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 items-center  lg:justify-between bg-white shadow-2xl rounded-[24px] py-6 px-16 lg:px-[24px]">
          {/* Weight Card */}
          <Link
            href="/dashboard/progress/weight"
            className="flex items-center w-[193px] h-[118px] bg-[#0026881A] text-white rounded-[20px] p-4"
          >
            <div>
              <Image
                src="/images/weight.png"
                alt="Weight Icon"
                width={49}
                height={40}
                className="mr-4"
              />
            </div>
            <div className="w-[75px] h-[78px]">
              <p className="text-lg font-bold text-[23.54px] leading-[28.69px] text-[#002688]">
                70 <span className="text-[15.69px] leading-[19.13px] font-semibold">Kg</span>
              </p>
              <p className="text-[19.61px] text-black leading-[23.91px] font-semibold w-[75px] h-[24px] pt-[5px]">
                Weight
              </p>
              <p className="text-[12px] leading-[14px]  text-[#9F9F9F] font-bold w-[53px] h-[15px] pt-[10px]">
                UPDATE
              </p>
            </div>
          </Link>

          {/* Steps Card */}
          <Link
            href="/dashboard/progress/steps"
            className="flex items-center  w-[193px] h-[118px] bg-[#00A3651A] text-white rounded-[20px] p-4"
          >
            <div>
              <Image
                src="/images/steps.png"
                alt="Steps Icon"
                width={49}
                height={40}
                className="mr-4"
              />
            </div>
            <div className="w-[75px] h-[78px]">
              <p className="text-lg font-bold text-[23.54px] leading-[28.69px] text-[#00A365]">120</p>
              <p className="text-[19.61px] text-black text-center leading-[23.91px] font-semibold w-[75px] h-[24px] pt-[5px] pr-[18px]">
                Steps
              </p>
              <p className="text-[12px] leading-[14px] text-[#9F9F9F] font-bold w-[53px] h-[15px] pt-[10px]">
                UPDATE
              </p>
            </div>
          </Link>

          {/* Sleep Card */}
          <Link
            href="/dashboard/progress/sleep"
            className="flex items-center   w-[193px] h-[118px] bg-[#9100FF1A] text-white rounded-[20px] p-4"
          >
            <div>
              <Image
                src="/images/sleep.png"
                alt="Sleep Icon"
                width={49}
                height={40}
                className="mr-4"
              />
            </div>
            <div className="w-[75px] h-[78px]">
              <p className="text-lg font-bold text-[23.54px] leading-[28.69px] text-[#9100FF]">
                10 <span className="text-[15.69px] leading-[19.13px] font-semibold">hrs</span>
              </p>
              <p className="text-[19.61px] text-black text-center leading-[23.91px] font-semibold w-[75px] h-[24px] pt-[5px] pr-[18px]">
                Sleep
              </p>
              <p className="text-[12px] leading-[14px] text-[#9F9F9F] font-bold w-[53px] h-[15px] pt-[10px]">
                UPDATE
              </p>
            </div>
          </Link>

          {/* Calories Card */}
          <Link
            href="/dashboard/progress/calories"
            className="flex items-center w-[193px] h-[118px] bg-[#FF95281A] text-white rounded-[20px] p-4"
          >
            <div>
              <Image
                src="/images/calories.png"
                alt="Calories Icon"
                width={49}
                height={40}
                className="mr-4"
              />
            </div>
            <div className="w-[75px] h-[78px]">
              <p className="text-lg font-bold text-[23.54px] leading-[28.69px] text-[#FF9528]">
                60 <span className="text-[15.69px] leading-[19.13px] font-semibold">Cal</span>
              </p>
              <p className="text-[19.61px] text-black text-center leading-[23.91px] font-semibold w-[75px] h-[24px] pt-[5px]">
                Calories
              </p>
              <p className="text-[12px] leading-[14px] text-[#9F9F9F] font-bold w-[53px] h-[15px] pt-[10px]">
                UPDATE
              </p>
            </div>
          </Link>

          {/* Water Card */}
          <Link
            href="/dashboard/progress/water"
            className="flex items-center  w-[193px] h-[118px] bg-[#35AAFF1A] text-white rounded-[20px] p-4"
          >
            <div>
              <Image
                src="/images/water.png"
                alt="Water Icon"
                width={49}
                height={40}
                className="mr-4"
              />
            </div>
            <div className="w-[85px] h-[78px]">
              <p className="text-lg font-bold text-[23.54px] leading-[28.69px] text-[#35AAFF]">
                8 <span className="text-[15.69px] leading-[19.13px] font-semibold">Glasses</span>
              </p>
              <p className="text-[19.61px] text-black text-center leading-[23.91px] font-semibold w-[75px] h-[24px] pt-[5px] pr-[18px]">
                Water
              </p>
              <p className="text-[12px] leading-[14px] text-[#9F9F9F] font-bold w-[53px] h-[15px] pt-[10px]">
                UPDATE
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Children Components */}
      <div className="mt-6">{children}</div>
    </div>
  );
};

export default Fitnessgoal;

