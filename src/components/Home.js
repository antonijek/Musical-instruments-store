import React from "react";
import Slider from "./Slider";
import Articles from "./Articles";
import Categories from "./Categories";
import Newsletter from "./Newsletter";
import Delivery from "./Delivery";
const Home = ({categoryId, setCategoryId}) => {
  return (
    <div>

      <Slider />
      <Articles />
      <Categories categoryId={categoryId} setCategoryId={setCategoryId} />
      <Newsletter />
      <Delivery />
    </div>
  );
};

export default Home;
