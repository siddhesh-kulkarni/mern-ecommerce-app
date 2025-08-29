import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <div className="homeSlider py-2 lg:py-4">
        <div className="container overflow-hidden">
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
              <div className="item rounded-[8px] lg:rounded-[20px] overflow-hidden">
                <img
                  src="images/Slider/slider1.jpg"
                  className="w-full h-[200px] lg:h-auto object-cover"
                  alt="Banner Images"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[8px] lg:rounded-[20px] overflow-hidden">
                <img
                  src="images/Slider/slider2.jpg"
                  className="w-full h-[200px] lg:h-auto object-cover"
                  alt="Banner Images"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[8px] lg:rounded-[20px] overflow-hidden">
                <img
                  src="images/Slider/slider3.jpg"
                  className="w-full h-[200px] lg:h-auto object-cover"
                  alt="Banner Images"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[8px] lg:rounded-[20px] overflow-hidden">
                <img
                  src="images/Slider/slider4.jpg"
                  className="w-full h-[200px] lg:h-auto object-cover"
                  alt="Banner Images"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[8px] lg:rounded-[20px] overflow-hidden">
                <img
                  src="images/Slider/slider5.jpg"
                  className="w-full h-[200px] lg:h-auto object-cover"
                  alt="Banner Images"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[8px] lg:rounded-[20px] overflow-hidden">
                <img
                  src="images/Slider/slider6.jpg"
                  className="w-full h-[200px] lg:h-auto object-cover"
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