import React from "react";
import Banner from "./Banner";
import Newsletter from "./Newsletter";
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
      <Newsletter />
    </div>
  );
};

export default Home;
