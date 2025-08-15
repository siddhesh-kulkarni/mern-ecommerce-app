import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox/page";

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={props.items}
        className="mySwiper"
        modules={[Navigation]}
        navigation={true}
      >
        <SwiperSlide>
          <BannerBox img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-1.jpg'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-2.jpg'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-3.jpg'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-1.jpg'}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};


export default AdsBannerSlider;  