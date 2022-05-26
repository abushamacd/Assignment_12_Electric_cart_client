import React from "react";
import Banner from "./Banner";
import Clients from "./Clients";
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
      <Clients />
    </div>
  );
};

export default Home;
