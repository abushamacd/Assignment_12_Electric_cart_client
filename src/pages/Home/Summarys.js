import React from "react";
import banner from "../../assets/summary.jpg";
import {
  FaUsers,
  FaFontAwesomeFlag,
  FaDollarSign,
  FaTools,
} from "react-icons/fa";
const Summarys = () => {
  return (
    <div class="hero min-h-screen my-24">
      <div class="hero-content flex-col lg:flex-row p-0">
        <div>
          <img
            alt="banner"
            src={banner}
            class="lg:max-w-lg rounded-lg shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-4xl py-8 text-center">Our Business Summary</h2>

          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-16">
            <div class="card w-80 bg-base-100 hover:shadow-xl hover:translate-y-[-30px] transition duration-0 hover:duration-700">
              <figure class="px-10 pt-10">
                <h1 className="text-6xl text-primary">
                  <FaFontAwesomeFlag />
                </h1>
              </figure>
              <div class="card-body items-center text-center">
                <h2 className="text-2xl text-accent"> 65+</h2>
                <h2 class="card-title">Countries</h2>
              </div>
            </div>
            <div class="card w-80 bg-base-100 hover:shadow-xl hover:translate-y-[-30px] transition duration-0 hover:duration-700">
              <figure class="px-10 pt-10">
                <h1 className="text-6xl text-primary">
                  <FaUsers />
                </h1>
              </figure>
              <div class="card-body items-center text-center">
                <h2 className="text-2xl text-accent"> 256k +</h2>
                <h2 class="card-title">Happy Clients</h2>
              </div>
            </div>
            <div class="card w-80 bg-base-100 hover:shadow-xl hover:translate-y-[-30px] transition duration-0 hover:duration-700">
              <figure class="px-10 pt-10">
                <h1 className="text-6xl text-primary">
                  <FaDollarSign />
                </h1>
              </figure>
              <div class="card-body items-center text-center">
                <h2 className="text-2xl text-accent">140M +</h2>
                <h2 class="card-title">Revenue</h2>
              </div>
            </div>
            <div class="card w-80 bg-base-100 hover:shadow-xl hover:translate-y-[-30px] transition duration-0 hover:duration-700">
              <figure class="px-10 pt-10">
                <h1 className="text-6xl text-primary">
                  <FaTools />
                </h1>
              </figure>
              <div class="card-body items-center text-center">
                <h2 className="text-2xl text-accent"> 25</h2>
                <h2 class="card-title">Tools</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summarys;
