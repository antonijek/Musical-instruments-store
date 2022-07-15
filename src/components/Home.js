import React from "react";
import Slider from "./Slider";
import Articles from "./Articles";
import Categories from "./Categories";
import Newsletter from "./Newsletter";
import Delivery from "./Delivery";
const Home = () => {
  return (
    <div>
      <Slider />
      <Articles />
      <Categories />
      <Newsletter />
      <Delivery />
    </div>
  );
};

export default Home;
