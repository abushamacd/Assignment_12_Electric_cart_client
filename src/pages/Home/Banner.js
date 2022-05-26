import React from "react";
import banner from "../../assets/banner.jpg";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen mt-4"
      style={{ background: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-base-100">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Electric Cart</h1>
          <p className="mb-5">Worldwide electric tools supplier</p>
          <PrimaryButton>Shop Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
