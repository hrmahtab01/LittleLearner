import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  const [Active, Setactive] = useState("Home");

  useEffect(() => {
    if (Active === "Home") {
      Navigate("/");
    } else if (Active === "About") {
      Navigate("/about");
    } else if (Active === "Academics") {
      Navigate("/Academics");
    } else if (Active === "Admission") {
      Navigate("/Admission");
    } else if (Active === "studentlife") {
      Navigate("/studentlife");
    }
  }, [Navigate, Active]);

  return (
    <div className="px-[51px]">
      <div className="w-full h-[58px] bg-PrimaryColor flex justify-center items-center rounded-[8px] border border-SecondaryColor ">
        <h1 className="text-SecondaryColor font-medium font-Outfit text-xl flex items-center gap-[14px] ">
          Admission is Open, Grab your seat now <FaArrowRight />
        </h1>
      </div>
      <nav className="w-full h-[80px] bg-BgColorwhite rounded-[12px] mt-[14px] flex justify-between items-center border border-SecondaryColor overflow-hidden">
        <div>
          <img
            className="rounded-s-[12px] w-[230px] h-[80px]"
            src={Logo}
            alt="Logo"
          />
        </div>
        <div className="">
          <ul className="flex h-full  cursor-pointer">
            <li
              onClick={() => Setactive("Home")}
              className={`text-xl font-medium font-Outfit text-SecondaryColor  px-[34px] border-l border-r py-10  hover:bg-[#FFEFE5] duration-300 ${
                Active === "Home" ? "bg-[#FFEFE5]" : "bg-[#fff]"
              }`}
            >
              Home
            </li>
            <li
              onClick={() => Setactive("About")}
              className={`text-xl font-medium font-Outfit text-SecondaryColor  px-[34px]  border-r py-10  hover:bg-[#FFEFE5] duration-300 ${
                Active === "About" ? "bg-[#FFEFE5]" : "bg-[#fff]"
              }`}
            >
              About Us
            </li>
            <li
              onClick={() => Setactive("Academics")}
              className={`text-xl font-medium font-Outfit text-SecondaryColor  px-[34px]  border-r py-10 hover:bg-[#FFEFE5] duration-300 ${
                Active === "Academics" ? "bg-[#FFEFE5]" : "bg-[#fff]"
              }`}
            >
              Academics
            </li>
            <li
              onClick={() => Setactive("Admission")}
              className={`text-xl font-medium font-Outfit text-SecondaryColor  px-[34px]  border-r py-10 hover:bg-[#FFEFE5] duration-300 ${
                Active === "Admission" ? "bg-[#FFEFE5]" : "bg-[#fff]"
              }`}
            >
              Admissions
            </li>
            <li
              onClick={() => Setactive("studentlife")}
              className={`text-xl font-medium font-Outfit text-SecondaryColor  px-[34px]  border-r py-10 hover:bg-[#FFEFE5] duration-300 ${
                Active === "studentlife" ? "bg-[#FFEFE5]" : "bg-[#fff]"
              }`}
            >
              Student Life
            </li>
            <li className="text-xl font-medium font-Outfit text-SecondaryColor  px-[34px]   py-10 bg-[#FFAE80]  ">
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
