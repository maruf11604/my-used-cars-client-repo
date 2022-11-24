import React from "react";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Instraction from "../Instraction/Instraction";

const Home = () => {
  return (
    <div className="mx-5 ">
      <Banner></Banner>
      <Category></Category>
      <Instraction></Instraction>
      <Advertise></Advertise>
    </div>
  );
};

export default Home;
