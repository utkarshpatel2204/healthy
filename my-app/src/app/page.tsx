'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login'); // Navigate to login page
  };
  interface Feature {
    img: string;
    text: string;
  }
  
  const features: Feature[] = [
    { img: "/images/about1.png", text: "Made Fresh Daily" },
    { img: "/images/about2.png", text: "Veg, Non-Veg, Vegan, Jain" },
    { img: "/images/about3.png", text: "Delivered Daily" },
    { img: "/images/about4.png", text: "Zero Plastic" },
    { img: "/images/about5.png", text: "Ayurveda" },
    { img: "/images/about6.png", text: "Track Fitness Goals" },
  ];

  interface Icon {
    img: string;
    text: string;
  }
  
  const icons: Icon[] = [
    { img: "/images/icons1.png", text: "Tiffin Service" },
    { img: "/images/icons2.png", text: "Healthy Food" },
    { img: "/images/icons3.png", text: "Weekly Meal Planning" },
    { img: "/images/icons4.png", text: "Doorstep Delivery" },
  ];

  interface Meal {
    img: string;
    title: string;
    bgColor: string;
  }
  
  const meals: Meal[] = [
    { img: "/images/meal1.png", title: "PROTEIN", bgColor: "#B0CFC333" },
    { img: "/images/meal2.png", title: "VEGGIES", bgColor: "#B2C6E4" },
    { img: "/images/meal3.png", title: "SIDES", bgColor: "#FFD273" },
    { img: "/images/meal4.png", title: "PROBIOTICS", bgColor: "#FFAD7A" },
  ];

  interface Feature {
    text: string;
  }
  
  const features1: Feature[] = [
    {
      text: "Made fresh daily👩‍🌾",
      img: ''
    },
    {
      text: "Homestyle regional",
      img: ''
    },
    {
      text: "Rotating menu🗓️",
      img: ''
    },
    {
      text: "Organic/non GMO🌱",
      img: ''
    },
    {
      text: "Less oil,🧂",
      img: ''
    },
    {
      text: "Balanced calories🍱",
      img: ''
    },
    {
      text: "Ayurvedic🧘‍♀️",
      img: ''
    },
    {
      text: "Green♻️",
      img: ''
    },
    {
      text: "Wt.Mgmt📉📲",
      img: ''
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-white flex flex-col items-center">
         <nav className="w-full lg:w-[1280px] mt-6 h-[66px] flex items-center justify-between bg-white shadow-md px-4 sm:px-8">
    <div className="flex items-center space-x-4">
      <img src='/images/logo1.png' alt="Logo" className="w-[66px] h-[66px]" />
      <div className="text-[18px] font-medium text-[#333333]">HEALTHY TIFFIN</div>
    </div>
    <div className="flex items-center space-x-4 text-gray-700">
      <a href="#cart" className="hover:text-green-600">MY CART</a>
      <p className="w-[4px] h-[17px] mb-2">|</p>
      <button  onClick={handleLogin} className="font-bold hover:text-green-600">SIGN IN</button>
    </div>
  </nav>
  <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-[1280px] h-auto lg:h-[562px] mt-[50px] px-4">
    <div className="w-full lg:w-[542px] text-center lg:text-left">
      <h1 className="text-4xl sm:text-5xl font-semibold leading-[1.2]">
        <span className="text-[#00633A] font-semibold block">YOUR HEALTH</span>
        <span className="text-[#0E0E0E] text-4xl sm:text-5xl font-[400] block">IS OUR PRIORITY</span>
      </h1>
      <button className="mt-10 p-[20px] bg-[#00633A] text-white font-semibold rounded-lg shadow hover:bg-[#004f2a] mx-auto lg:mx-0">
        Sign Up Now
      </button>
    </div>
    <div className="relative mt-8 lg:mt-0 w-full lg:w-[696px]">
      <img src='/images/image.png' alt="Main Dish" className="w-[80%] lg:w-[587px] h-auto mx-auto object-cover" />
    </div>
    </div>
    </div>

      <div className="w-full h-[72px] bg-[#00633A] flex justify-center items-center mt-6">
      <p className="text-2xl sm:text-3xl text-white">
        <span className="font-bold">Fresh</span> healthy tiffin delivered <span className="font-bold">daily!</span>
      </p>
          </div>
          <div className="flex flex-wrap justify-center gap-[20px] mt-8 px-4">
      {features.map((feature, index) => (
        <div key={index} className="w-[149.36px] h-auto text-center">
          <img
            src={feature.img}
            alt={`Feature ${index + 1}`}
            className="w-[149.36px] h-[149.36px] mx-auto"
          />
          <p className="mt-[20px] text-[16px] sm:text-[20px] text-[#333333]">
            {feature.text}
          </p>
        </div>
      ))}
    </div>
    <div className="relative w-full lg:w-[1442px] h-auto lg:h-[614px] mt-[20px] overflow-hidden">
      <img
        src="/images/service.png" // replace with your actual image path in the public folder
        alt="Service Background"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-4 lg:px-[116px]">
        <p className="font-Montserrat font-semibold text-[28px] sm:text-[51px] leading-[1.2] text-center tracking-[-2px]">
          4 TIER PORTION CONTROLLED TIFFIN
          <span className="text-[24px] sm:text-[40px] font-thin leading-[1.2] block">
            DELIVERED TO DOORSTEP DAILY
          </span>
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="w-[150px] sm:w-[200px] h-[62px] bg-white rounded-[10px] flex items-center shadow-md"
            >
              <img
                src={icon.img}
                alt={`Icon ${index + 1}`}
                className="w-[20px] h-[20px]"
              />
              <p className="font-semibold text-[14px] sm:text-[18px] ml-4">
                {icon.text}
              </p>
            </div>
          ))}
        </div>
        <p className="w-full text-[14px] sm:text-[16px] text-center mt-4 px-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolore recusandae sunt beatae.
        </p>
        <button className="bg-[#00633A] text-white font-semibold text-[16px] sm:text-[18px] w-[150px] sm:w-[174px] h-[60px] sm:h-[70px] rounded-[10px] mt-4">
          Sign Up Now
        </button>
      </div>
    </div>

    <div className="w-full lg:w-[1441px] px-4 lg:px-[100px] py-[40px] lg:py-[80px] gap-[20px]">
      <div className="text-center lg:text-left mb-[30px]">
        <p className="text-[24px] sm:text-[32px] font-semibold">
          Balanced Meals
          <span className="font-normal text-[14px] sm:text-[16px] text-[#00633A]">
            (450-650 calories per meal)
          </span>
        </p>
        <div className="text-[16px] sm:text-[18px] mt-[10px]">
          Planned by dieticians and ayurvedic experts
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-[40px] mt-[40px]">
        {meals.map(({ img, title, bgColor }, index) => (
          <div
            key={index}
            className="w-[200px] sm:w-[250px] h-[269px] rounded-[33px] flex flex-col items-center py-[15px] px-[20px] gap-[10px] shadow-md"
            style={{ backgroundColor: bgColor }}
          >
            <img src={img} alt={title} className="w-[212px] h-[169px] rounded-[10px]" />
            <p className="mt-[20px] text-[20px] font-bold">{title}</p>
          </div>
        ))}
      </div>
    </div>

       <div className="relative w-full lg:w-[1442px] h-auto lg:h-[670.37px] bg-[#FEAF0D] overflow-hidden">
    <img src='/images/track.png' alt="Track Background" className="absolute inset-0 w-full h-full object-cover opacity-10" />
     <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-[100px] pt-[50px] lg:pt-[74px] pb-[50px] lg:pb-[98px] relative">
       <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
         <h2 className="text-[#00633A] text-[32px] sm:text-[64px] font-semibold">TRACK YOUR <span className="text-[80px] font-thin">FITNESS GOALS</span></h2>
       <p className="text-[16px] sm:text-[18px] mt-4">
           With the upcoming release of our app, managing your health has never been easier. From scheduling meals to consulting with dietitians and tracking health goals, Healthy Tiffin puts your well-being at the forefront of everything we do.
         </p>
         <button className="bg-[#00633A] text-white font-semibold text-[18px] w-[185px] h-[70px] rounded-[10px] mt-4 mx-auto lg:mx-0">App Coming Soon!</button>
       </div>
       <div className="lg:w-1/2 flex justify-center relative">
         <div className="absolute bg-[#FFFFFF47] rounded-tl-[80px] rounded-bl-[80px] w-[80%] h-[80%]"></div>
         <h2 className="text-[48px] sm:text-[96px] font-bold absolute">APP <span className="font-thin">COMING SOON</span></h2>
       </div>
     </div>
   </div>

        <div className="flex flex-wrap w-full lg:w-[1172px] h-auto lg:h-[580px] mt-[131px] ml-[5%] lg:ml-[128px] mr-[5%] lg:mr-[140px] mb-[92px]">
       {/* Image Section */}
       <img src='/images/content.png' alt="Tiffin Content" className="w-full lg:w-[549px] h-auto lg:h-[580px] object-cover" />
      {/* Text Section */}
      <div className="w-full lg:w-[561px] h-auto lg:h-[558px] mt-[22px] lg:mt-[0] lg:ml-[62px]">
        {/* Title */}
        <div className="w-full lg:w-[560px] h-auto mb-[23px]">
          <p className="text-[28px] sm:text-[40px] font-semibold">
            Tiffin Delights for <span className="text-[#00633A] font-semibold">your Wellness</span>
          </p>
        </div>
        {/* Description */}
        <div className="w-full lg:w-[561px] h-auto text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px] mb-[23px]">
          Our menu at Healthy Tiffin presents a variety of dishes from across India, each with its unique flavor and health benefits. It's about wrapping the comfort and nostalgia of our rich culinary heritage in a box and bringing it to the modern dining table.
         </div>

         {/* Feature 1 */}
         <div className="flex w-full lg:w-[243px] h-auto mb-[23px]">
           <div className="w-[30px] h-[30px] bg-[#FEAF0D] rounded-[50%] mr-[2px]">
             <p className="ml-[10px] mt-[1px] text-[#FFFFFF]">1</p>
           </div>
           <div className="w-[10px] h-[10px] bg-[#FEAF0D] rounded-[50%]" />
           <div className="w-full ml-[22px] text-[16px] font-semibold">TrustWorthy</div>
         </div>

         {/* Feature 2 */}
         <div className="flex w-full lg:w-[243px] h-auto mb-[23px]">
           <div className="w-[30px] h-[30px] bg-[#FEAF0D] rounded-[50%] mr-[2px]">
             <p className="ml-[10px] mt-[1px] text-[#FFFFFF]">2</p>
           </div>
           <div className="w-[10px] h-[10px] bg-[#FEAF0D] rounded-[50%]" />
           <div className="w-full ml-[22px] text-[16px] font-semibold">Cheap & Secure</div>
         </div>
         {/* Nutritional Info */}
         <div className="w-full lg:w-[560px] h-auto mt-[23px] text-[14px] sm:text-[15px] leading-[24px] sm:leading-[26px] font-semibold">
           Your health is our paramount concern. We meticulously balance each meal to fulfill daily nutritional needs—protein, vegetables, healthy carbs, fiber, good fats, and probiotics, all while keeping the calorie count between 450 to 650 per serving.
        </div>

         {/* Read More Button */}
         <div className="w-full lg:w-[151px] h-[55px] mt-[22px] rounded-[10px] bg-[#FEAF0D] mx-auto">
           <button className="w-full h-full py-[15px] text-[#FFFFFF]">Read More</button>
         </div>
       </div>
     </div>

        <div className="flex flex-wrap w-full lg:w-[1200px] mx-auto h-auto lg:h-[614px] bg-[#FEAF0D1A] rounded-[10px] p-4 lg:p-0">
      
       <div className="w-full lg:w-[469px] h-auto lg:h-[347.03px] mt-[20px] lg:mt-[121px] ml-[5%] lg:ml-  [75px] text-center lg:text-left">
         <div className="w-full lg:w-[178px] h-[23px] text-[18px] font-semibold text-[#FEAE0D] leading-[22.4px] tracking-[2px] mb-2">
           DOWNLOAD APP
         </div>
         <div className="w-full lg:w-[404px] h-auto text-[28px] lg:text-[38px] font-semibold leading-[60px] mb-4">
           DOWNLOAD HEALTHY TIFFIN APP
         </div>
         <div className="w-full lg:w-[469px] h-auto text-[14px] sm:text-[16px] leading-[24px] mb-4">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum omnis quis itaque velit doloribus delectus eos.
         </div>

         {/* Download Buttons */}
         <div className="flex justify-center lg:justify-start gap-[16px]">
           <img src='/images/gplay.png' alt="Google Play" className="w-[150px] sm:w-[200px] h-[60px]"/>
           <img src='/images/appstore.png' alt="App Store" className="w-[150px] sm:w-[200px] h-[60px]"/>
         </div>
       </div>
       {/* Right Section: Phone Image */}
       <div className="relative w-full lg:w-[427.72px] h-auto lg:h-[504.32px] mt-[20px] lg:mt-[55px] mr-[5%] lg:mr-[116.28px] ml-[5%] lg:ml-[112px] flex justify-center lg:justify-end">
        
        {/* Phone Image */}
        <div className="relative w-[249.25px] h-[504.32px] mb-4">
          <img src='/images/phone1.png' alt="Phone 1" className="relative w-full h-full rounded-[30px] mx-[12px] mt-[10px]" />
        </div>
        {/* Download Image */}
     
      </div>
    </div>

    <div className="w-full lg:w-[1443px] h-auto bg-[#00633A] px-4 mt-[30px] lg:px-[100px] py-8">
      <div className="text-center text-white text-[28px] sm:text-[36px] font-semibold">
        Your Health Is Our Priority!
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {features1.map((feature, index) => (
          <div
            key={index}
            className="flex items-center bg-white text-[#333] p-4 rounded-lg shadow-md"
          >
            <img
              src="/images/tick.png"
              alt="Icon"
              className="w-[20px] h-[20px] mr-4"
            />
            <p className="font-medium">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
    <footer className="w-full px-4 py-6">
       <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 text-center lg:text-left">
         <div>
           <img src='images/logo1.png' alt="Logo" className="w-[66px] h-[66px] mx-auto lg:mx-0" />
           <p className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
         </div>
         {/* Add additional sections */}  
         <div className="flex mt-4 gap-3 justify-center lg:justify-start">
         <i className="fa-brands fa-instagram text-[24px]"></i>
         <i className="fa-brands fa-facebook-f text-[24px]"></i>
         <i className="fa-brands fa-twitter text-[24px]"></i>
       </div>
     {/* Quick Links Section */}
     <div className="text-center lg:text-left">
       <p className="font-semibold text-[20px] leading-[22.4px] mb-2">Quick Links</p>
       <p className="text-[16px] font-medium mt-4">Home</p>
       <p className="text-[16px] font-medium mt-2">About</p>
       <p className="text-[16px] font-medium mt-2">Recipies</p>
       <p className="text-[16px] font-medium mt-2">Contact Us</p>
     </div> 
     {/* Useful Links Section */}
     <div className="text-center lg:text-left">
       <p className="font-semibold text-[20px] leading-[22.4px] mb-2">Useful Links</p>
       <p className="text-[16px] font-medium mt-4">FAQ</p>
       <p className="text-[16px] font-medium mt-2">Privacy Policy</p>
       <p className="text-[16px] font-medium mt-2">Terms & Conditions</p>
     </div> 
     {/* Contact Info Section */}
     <div className="text-center lg:text-left">
       <p className="font-semibold text-[20px] leading-[22.4px] mb-2">Contact Info</p>
       <p className="text-[16px] font-medium mt-4">21 Lorem Ipsum Street, 69570, New York, USA</p>
       <p className="text-[16px] font-medium mt-2">demouser@gmail.com</p>
       <p className="text-[16px] font-medium mt-2">( +01 ) 123-345-4567</p>
     </div>
       </div>
       <div className="text-center text-sm mt-4">
         Copyright © 2023. All Rights Reserved
       </div>
     </footer>


    </div>
  );
}






