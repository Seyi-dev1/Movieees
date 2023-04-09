import React from "react";
import Carousel from "../../components/carousel/Carousel";
import Celebrities from "../../components/celebrities/Celebrities";
import Section from "../../components/sections/Section";
import Videocarousel from "../../components/video_carousel/Videocarousel";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Carousel sort="now_playing" />
      <Section title="Popular" sort="popular" slice={true} number="8" />
      <Section title="Top Rated" sort="top_rated" slice={true} number="8" />
      <Section
        title="Coming soon to cinemas"
        sort="upcoming"
        slice={true}
        number="8"
      />
      <div className="video_carousel_parent">
        <span className="video_carousel_con_title">IN THEATRE🔥</span>
        <div className="video_carousel_container">
          <Videocarousel />
          <Celebrities />
        </div>
      </div>
    </div>
  );
};

export default Home;
//FOR TRENDING MOVIES
// `https://api.themoviedb.org/3/trending/all/day?api_key=${
//    import.meta.env.VITE_API_KEY
//  }`;
//
//
//
//
