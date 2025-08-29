import React from "react";

const BannerBox = ({ img }) => {
  return (
    <div className="bannerBox group rounded-lg overflow-hidden">
      <img
        src={img}
        alt="Banner"
        className="w-full transition-all duration-300 group-hover:scale-105"
      />
    </div>
  );
};

export default BannerBox;
