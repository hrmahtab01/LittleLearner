import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Iconone from "../assets/icon.png";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "0px",
    prevArrow: false,
  };
  return (
    <div className="mt-[200px] ">
      <div className="max-w-Container mx-auto">
        <div className="grid grid-cols-1 text-center">
          <div className=" bg-BgColorwhite w-[217px] h-[47px] rounded-[8px] mx-auto ">
            <p className="text-lg font-medium font-Outfit text-[#333333] leading-loose  ">
              Their Happy Words 🤗{" "}
            </p>
          </div>

          <h2 className="font-bold font-Raleway text-[#1A1A1A] text-[58px] mt-[19px]">
            Our Testimonials
          </h2>
          <p className="text-[20px] text-[#333333] font-medium font-Outfit max-w-[992px] mx-auto mt-[19px]">
            Our testimonials are heartfelt reflections of the nurturing
            environment we provide, where children flourish both academically
            and emotionally.
          </p>
        </div>

        <Slider {...settings}>
          <div className=" bg-BgColorwhite rounded-[12px] shadow-[10px_8px_0px_0px_#1A1A1A] shadow-SecondaryColor mb-5  ">
            <div className="flex flex-col items-center justify-center">
              <div>
                <div className="w-[80px] h-[80px] rounded-full bg-[#FFF5F0] flex justify-center items-center mx-auto mt-[50px]">
                  <img
                    className="   with-[56px] h-[56px]"
                    src={Iconone}
                    alt="Iconone"
                  />
                </div>
                <h3 className="text-[24px] font-semibold font-Outfit text-[#333333] mt-3 text-center">
                  Jennifer B
                </h3>
                <ul className="flex gap-[5px] mt-[30px]">
                  <li className="text-[24px] text-[#FF8D4D]">
                    <FaStar />
                  </li>
                  <li className="text-[24px] text-[#FF8D4D]">
                    <FaStar />
                  </li>
                  <li className="text-[24px] text-[#FF8D4D]">
                    <FaStar />
                  </li>
                  <li className="text-[24px] text-[#FF8D4D]">
                    <FaStar />
                  </li>
                  <li className="text-[24px] text-[#FF8D4D]">
                    <FaStar />
                  </li>
                </ul>
              </div>
              <p className="text-[20px] font-medium font-Outfit text-[#333333]  text-center mt-[30px] ">
                Little Learners Academy has been a second home for my child. The
                caring staff and engaging programs have made her excited to go
                to school every day!
              </p>
            </div>
          </div>
          <div className=" bg-BgColorwhite rounded-[12px] shadow-[10px_8px_0px_0px_#1A1A1A] shadow-SecondaryColor mb-5   ">
            <div className="flex flex-col items-center justify-center">
              <div>
                <div className="w-[80px] h-[80px] rounded-full bg-[#FFF5F0] flex justify-center items-center mx-auto mt-[50px]">
                  <img
                    className="   with-[56px] h-[56px]"
                    src={Iconone}
                    alt="Iconone"
                  />
                </div>
                <h3 className="text-[24px] font-semibold font-Outfit text-[#333333] mt-3 text-center">
                  Jennifer B
                </h3>
                <ul className="flex gap-[5px] mt-[30px]">
                  <li className="text-[24px] text-[#FF8D4D]">
                    <FaStar />
                  </li>
                  <li className="text-[24px] text-[#FF8D4D]">
                    <FaStar />
                  </li>
                  <li className="text-[24px] text-[#FF8D4D]">
                    <FaStar />
                  </li>
                  <li className="text-[24px] text-[#FF8D4D]">
                    <FaStar />
                  </li>
                  <li className="text-[24px] text-[#FF8D4D]">
                    <FaStar />
                  </li>
                </ul>
              </div>
              <p className="text-[20px] font-medium font-Outfit text-[#333333]  text-center mt-[30px]">
                Little Learners Academy has been a second home for my child. The
                caring staff and engaging programs have made her excited to go
                to school every day!
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
