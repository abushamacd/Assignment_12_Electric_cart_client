import React from "react";
import Banner from "./Banner";
import Reviews from "./Reviews";
import Summarys from "./Summarys";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <Summarys />
      <Reviews />
    </div>
  );
};

export default Home;
