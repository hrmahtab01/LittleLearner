import React from "react";
import bannerimage from "../assets/Banner.png";
import CountUp from "react-countup";

const Banner = () => {
  return (
    <div className="mt-[80px]">
      <div className="max-w-Container mx-auto ">
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-2">
          <div>
            <img className="w-[765px] h-[765px]" src={bannerimage} alt="" />
          </div>
          <div className="mt-[142px]">
            <h3 className="text-[#262626] text-[22px] font-Outfit font-medium">
              Welcome to Little Learners Academy
            </h3>
            <h1 className="text-[54px] font-extrabold text-[#1A1A1A] font-Raleway">
              Where Young Minds Blossom and{" "}
              <span className="text-[#FF8D4D]">Dreams Take Flight.</span>{" "}
            </h1>
            <p className="font-medium text-xl font-Outfit  text-[#4C4C4D] leading-9 mt-7">
              Our kinder garden school provides a nurturing and stimulating
              environment, fostering a love for learning that lasts a lifetime.
              Join us as we embark on an exciting educational journey together!
            </p>
            <div className="w-[765px] h-[141px] bg-[#FFEFE5] border-[2px] border-SecondaryColor  shadow-PrimaryColor shadow-[15px_14px_0px_0px_#FF8D4D] rounded-[12px] mt-[60px] flex justify-center items-center gap-[18px]">
              <div className="text-[44px] font-extrabold font-Outfit text-[#262626] text-center">
               <span>+</span> <CountUp start={0} end={7000} duration={3} />
               <h3 className="text-[18px] font-medium text-SecondaryColor font-Outfit">Students Passed Out</h3>
              </div>
              <div className="text-[44px] font-extrabold font-Outfit text-[#262626] text-center">
               <span>+</span> <CountUp start={0} end={37} duration={3} />
               <h3 className="text-[18px] font-medium text-SecondaryColor font-Outfit">Awards & Recognitions</h3>
              </div>
              <div className="text-[44px] font-extrabold font-Outfit text-[#262626] text-center">
               <span>+</span> <CountUp start={0} end={15} duration={3} />
               <h3 className="text-[18px] font-medium text-SecondaryColor font-Outfit">Experience Educators</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
