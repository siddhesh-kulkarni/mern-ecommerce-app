import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <div className="homeSlider py-4">
        <div className="container">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="sliderHome"
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="images/Slider/slider1.jpg"
                  className="w-full"
                  alt="Banner Images"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="images/Slider/slider2.jpg"
                  className="w-full"
                  alt="Banner Images"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="images/Slider/slider3.jpg"
                  className="w-full"
                  alt="Banner Images"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="images/Slider/slider4.jpg"
                  className="w-full"
                  alt="Banner Images"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="images/Slider/slider5.jpg"
                  className="w-full"
                  alt="Banner Images"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="images/Slider/slider6.jpg"
                  className="w-full"
                  alt="Banner Images"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Slider;
