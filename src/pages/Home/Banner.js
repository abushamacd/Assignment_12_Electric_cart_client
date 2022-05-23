import React from "react";
import banner from "../../assets/banner.jpg";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div
      class="hero min-h-screen mt-4"
      style={{ background: `url(${banner})` }}
    >
      <div class="hero-overlay bg-opacity-30"></div>
      <div class="hero-content text-center text-base-100">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Electric Cart</h1>
          <p class="mb-5">Worldwide electric tools supplier</p>
          <PrimaryButton>Shop Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
