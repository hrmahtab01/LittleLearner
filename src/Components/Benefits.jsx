import React from "react";
import { HiAcademicCap } from "react-icons/hi";
import { FaCrown } from "react-icons/fa";
import { FaMaskFace } from "react-icons/fa6";
import { FaRegFlag } from "react-icons/fa";
import { PiWheelchairMotionBold } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";

const Benefits = () => {
  return (
    <div className="mt-[200px]">
      <div className="max-w-Container mx-auto">
        <div className="grid grid-cols-1 text-center">
          <div className=" bg-BgColorwhite w-[287px] h-[47px] rounded-[8px] mx-auto ">
            <p className="text-lg font-medium font-Outfit text-[#333333] leading-loose  ">
              Children Deserve Bright Future
            </p>
          </div>

          <h2 className="font-bold font-Raleway text-[#1A1A1A] text-[58px] mt-[19px]">
            Our Benefits
          </h2>
          <p className="text-[20px] text-[#333333] font-medium font-Outfit max-w-[992px] mx-auto mt-[19px]">
            With a dedicated team of experienced educators, state-of-the-art
            facilities, and a comprehensive curriculum, we aim to lay a strong
            foundation for your child's future.
          </p>
        </div>
        <div className="mt-[100px] grid  grid-cols-1  lg:grid-cols-3">
            <div className="max-w-[504px] h-[341px] bg-BgColorwhite rounded-[12px] border border-SecondaryColor  shadow-[10px_8px_0px_0px_#1A1A1A] shadow-SecondaryColor relative flex justify-center items-center flex-col gap-10">
                <div className="w-[74px] h-[74px] bg-[#FFDECC] absolute top-[-35px] left-8 rounded-[12px] flex items-center  justify-center border-SecondaryColor border ">
                <HiAcademicCap className="text-[32px]" />
                </div>
                <h3 className="text-[28px] font-bold font-Raleway   text-SecondaryColor mt-4">Holistic Learning Approach</h3>
                <p className="text-xl font-medium font-Outfit text-[#4C4C4D] px-[50px] leading-loose  text-center ">Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.</p>
            </div>
            <div className="max-w-[504px] h-[341px] bg-BgColorwhite rounded-[12px] border border-SecondaryColor  shadow-[10px_8px_0px_0px_#1A1A1A] shadow-SecondaryColor relative flex justify-center items-center flex-col">
                <div className="w-[74px] h-[74px] bg-[#FFDECC] absolute top-[-35px] left-8 rounded-[12px] flex items-center  justify-center border-SecondaryColor border ">
                <FaCrown className="text-[32px]" />
                </div>
                <h3 className="text-[28px] font-bold font-Raleway  text-SecondaryColor mr-[30px] mt-3">Experienced Educators</h3>
                <p className="text-xl font-medium font-Outfit text-[#4C4C4D] px-[50px] mx-auto leading-loose mt-[20px] text-center">Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
            </div>
            <div className="max-w-[504px] h-[341px] bg-BgColorwhite rounded-[12px] border border-SecondaryColor  shadow-[10px_8px_0px_0px_#1A1A1A] shadow-SecondaryColor relative flex justify-center items-center flex-col">
                <div className="w-[74px] h-[74px] bg-[#FFDECC] absolute top-[-35px] left-8 rounded-[12px] flex items-center  justify-center border-SecondaryColor border ">
                <FaMaskFace className="text-[32px]" />
                </div>
                <h3 className="text-[28px] font-bold font-Raleway  text-SecondaryColor mr-[30px] mt-3">Nurturing Environment</h3>
                <p className="text-xl font-medium font-Outfit text-[#4C4C4D] px-[50px] mx-auto leading-loose mt-[20px] text-center">We prioritize safety and provide a warm and caring atmosphere for every child. </p>
            </div> <div className="mt-[85px] max-w-[504px] h-[341px] bg-BgColorwhite rounded-[12px] border border-SecondaryColor  shadow-[10px_8px_0px_0px_#1A1A1A] shadow-SecondaryColor relative flex justify-center items-center flex-col">
                <div className="w-[74px] h-[74px] bg-[#FFDECC] absolute top-[-35px] left-8 rounded-[12px] flex items-center  justify-center border-SecondaryColor border ">
                <FaRegFlag className="text-[32px]" />
                </div>
                <h3 className="text-[28px] font-bold font-Raleway  text-SecondaryColor mr-[30px] mt-3">Play-Based Learning</h3>
                <p className="text-xl font-medium font-Outfit text-[#4C4C4D] px-[50px] mx-auto leading-loose mt-[20px] text-center">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
            </div> <div className="mt-[85px] max-w-[504px] h-[341px] bg-BgColorwhite  rounded-[12px] border border-SecondaryColor  shadow-[10px_8px_0px_0px_#1A1A1A] shadow-SecondaryColor relative flex justify-center items-center flex-col">
                <div className="w-[74px] h-[74px] bg-[#FFDECC] absolute top-[-35px] left-8 rounded-[12px] flex items-center  justify-center border-SecondaryColor border ">
                <PiWheelchairMotionBold className="text-[32px]" />
                </div>
                <h3 className="text-[28px] font-bold font-Raleway  text-SecondaryColor mr-[30px] mt-3">Parent Involvement</h3>
                <p className="text-xl font-medium font-Outfit text-[#4C4C4D] text-center px-[50px] mx-auto leading-loose mt-[20px]">Our small class sizes enable personalized attention, catering to each child's unique needs.</p>
            </div> <div className="mt-[85px] max-w-[504px] h-[341px] bg-BgColorwhite rounded-[12px] border border-SecondaryColor  shadow-[10px_8px_0px_0px_#1A1A1A] shadow-SecondaryColor relative flex justify-center items-center flex-col">
                <div className="w-[74px] h-[74px] bg-[#FFDECC] absolute top-[-35px] left-8 rounded-[12px] flex items-center  justify-center border-SecondaryColor border ">
                <FaUserFriends className="text-[32px]" />
                </div>
                <h3 className="text-[28px] font-bold font-Raleway  text-SecondaryColor mr-[30px] mt-3">Holistic Learning Approach</h3>
                <p className="text-xl font-medium font-Outfit text-[#4C4C4D] text-center px-[50px] mx-auto leading-loose mt-[20px]">We foster a strong parent-school partnership to ensure seamless communication and collaboration.</p>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Benefits;