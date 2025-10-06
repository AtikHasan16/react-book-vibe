import React from "react";
import bannerImg from "../assets/pngwing 1.png";
const Banner = () => {
  return (
    <div className="hero bg-gray-200 rounded-3xl md:p-20 font mb-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className=" w-1/2  rounded-lg" />
        <div className="space-y-10 text-center md:text-left">
          <h1 className="text-6xl  font-bold">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn bg-green-500 text-white rounded-md">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
