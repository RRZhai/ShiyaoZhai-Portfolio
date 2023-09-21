import React from "react";
import "./home.css";
import Scroll from "../Scroll";
import Portrait from "./Portrait";
import Info from "./Info";

const Home = () => {

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Portrait />
          <Info />
        </div>
      </div>
      <div className="home scroll">
        <Scroll value='#about'/>
      </div>
    </section>
  );
};

export default Home;
