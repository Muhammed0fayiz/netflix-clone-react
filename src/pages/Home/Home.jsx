import React from "react";
import "./Home.css";
import banner from '../../assets/bannermain.jpg';

import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={banner} alt="Banner" className="banner-img" />
        <div className="hero-caption">
          <img src="" alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living in
            modern Istanbul embarks on a quest to save the city from an immortal
            enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <FontAwesomeIcon icon={faPlay} />
              Play
            </button>
            <button className="btn dark-btn">
              <FontAwesomeIcon icon={faCircleInfo} />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Blockbuster Movies" category={"top_rated"} />
        <TitleCards title="Only on Netflix" category={"popular"} />
        <TitleCards title="Upcoming" category={"upcoming"}/>
        <TitleCards title="Top Picks for You" category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
