import React from "react";
import Main from "../components/Main";
import Products from "../components/Products";
import Yummy from "../components/Yummy";
import Categories from "../components/Categories";
import More from "../components/More";
import Sticky from "../components/Sticky";
import RoundWave from "../components/RoundWave";

const Home = () => {
  return (
    <>
      <Main />
      <Sticky />
      <Products />
      <RoundWave />
      <Yummy />
      <Categories />
      <More />
    </>
  );
};

export default Home;
