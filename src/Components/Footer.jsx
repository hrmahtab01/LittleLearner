import React from "react";
import Logo from "../assets/footer logo.png";
import { FaLocationDot, FaRegMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <div className=" mt-[200px] mb-[50px] px-[50px] ">
      <div className=" bg-white rounded-[40px] border-black border shadow-[6px_6px_0px_0px_#1A1A1A] shadow-SecondaryColor md:py-[100px] md:px-[113px] py-1 px-2">
        <div className="max-w-Container mx-auto ">
          <div className=" grid grid-cols-1 md:grid-cols-3 space-x-[40px] pb-[50px] border-b border-black ">
            <div className="">
              <img className="w-[228px] h-[50px]" src={Logo} alt="logo" />
              <p className="text-[20px] text-[#4C4C4D] font-medium font-Outfit mt-[20px]">
                We believe in the power of play to foster creativity,
                problem-solving skills, and imagination.
              </p>
              <div className="mt-[50px] flex flex-col gap-6">
                <div className="flex gap-[10px]">
                  <div className="py-2 px-2 bg-[#FFF5F0] w-fit rounded-[6px] border border-black ">
                    <FaRegMessage className="text-[24px] text-black" />
                  </div>
                  <a
                    className="text-xl text-[#262626] font-medium font-Outfit"
                    href="#"
                  >
                    hello@littlelearners.com
                  </a>
                </div>
                <div className="flex gap-[10px]">
                  <div className="py-2 px-2 bg-[#FFF5F0] w-fit rounded-[6px] border border-black ">
                    <IoCall className="text-[24px] text-black" />
                  </div>
                  <a
                    className="text-xl text-[#262626] font-medium font-Outfit"
                    href="#"
                  >
                    +91 91813 23 2309
                  </a>
                </div>
                <div className="flex gap-[10px]">
                  <div className="py-2 px-2 bg-[#FFF5F0] w-fit rounded-[6px] border border-black ">
                    <FaLocationDot className="text-[24px] text-black" />
                  </div>
                  <a
                    className="text-xl text-[#262626] font-medium font-Outfit"
                    href="#"
                  >
                    Somewhere in the World
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <h3 className="text-[20px] text-[#262626] font-semibold font-Outfit">
                  Home
                </h3>
                <ul className="mt-6 flex flex-col gap-[14px]">
                  <li className="text-[20px] text-[#333333] font-medium font-Outfit">
                    Features
                  </li>
                  <li className="text-[20px] text-[#333333] font-medium font-Outfit">
                    Our Testimonials
                  </li>
                  <li className="text-[20px] text-[#333333] font-medium font-Outfit">
                    FAQ
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[20px] text-[#262626] font-semibold font-Outfit">
                  About Us
                </h3>
                <ul className="mt-6 flex flex-col gap-[14px]">
                  <li className="text-[20px] text-[#333333] font-medium font-Outfit">
                    Our Mission
                  </li>
                  <li className="text-[20px] text-[#333333] font-medium font-Outfit">
                    Our Vission
                  </li>
                  <li className="text-[20px] text-[#333333] font-medium font-Outfit">
                    Awards and Recognitions
                  </li>
                  <li className="text-[20px] text-[#333333] font-medium font-Outfit">
                    History
                  </li>
                  <li className="text-[20px] text-[#333333] font-medium font-Outfit">
                    Teachers
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <h3 className="text-[20px] text-[#262626] font-semibold font-Outfit">
                  Academics
                </h3>
                <ul className="mt-6 flex flex-col gap-[14px]">
                  <li className="text-[20px] text-[#333333] font-medium font-Outfit">
                    Special Features
                  </li>
                  <li className="text-[20px] text-[#333333] font-medium font-Outfit">
                    Gallery
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[20px] text-[#262626] font-semibold font-Outfit">
                  Contact Us
                </h3>
                <ul className="mt-6 flex flex-col gap-[14px]">
                  <li className="text-[20px] text-[#333333] font-medium font-Outfit">
                    Information
                  </li>
                  <li className="text-[20px] text-[#333333] font-medium font-Outfit">
                    Map & Direction
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-[30px]">
        <p className="text-lg text-[#656567] font-medium font-Outfit"> Copyright © [2024] Little Learners Academy. All rights reserved.</p>
      </div>
      </div>
     
    </div>
  );
};

export default Footer;
