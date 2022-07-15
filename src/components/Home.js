import React from "react";
import Slider from "./Slider";
import Articles from "./Articles";
import Categories from "./Categories";
import Newsletter from "./Newsletter";
const Home = () => {
  return (
    <div>
      <Slider />
      <Articles />
      <Categories />
      <Newsletter />
    </div>
  );
};

export default Home;
