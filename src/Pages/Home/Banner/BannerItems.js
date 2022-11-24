import React from "react";
import "./BannerItems.css";

const BannerItems = ({ slide }) => {
  const { id, next, prev, image } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <img src={image} className="w-full rounded-xl" alt="" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;
