import React from "react";
import img1 from "../../../assets/Banner/p1.jpg";
import img2 from "../../../assets/Banner/p2.jpg";
import img3 from "../../../assets/Banner/p3.jpg";
import BannerItems from "./BannerItems";

const Banner = () => {
  const bannerData = [
    {
      image: img1,
      prev: 3,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 1,
    },
  ];
  return (
    <div>
      <div className="carousel w-full my-10">
        {bannerData.map((slide) => (
          <BannerItems key={slide.id} slide={slide}></BannerItems>
        ))}
        {/* <div id="slide1" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
