import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import { Navigation } from "swiper/modules";

const CatSlider = () => {
  return (
    <>
      <div className="homeCatSlider py-8 pt-4">
        <div className="container">
          <Swiper
            spaceBetween={10}
            slidesPerView={8}
            className="mySwiper"
            modules={[Navigation]}
            navigation={true}
          >
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CatSlider;
