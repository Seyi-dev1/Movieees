import React from "react";
import Carousel from "../../components/carousel/Carousel";
import Celebrities from "../../components/celebrities/Celebrities";
import Section from "../../components/sections/Section";
import Videocarousel from "../../components/video_carousel/Videocarousel";
import "./home.scss";
import {
  selectNowPlayingMovies,
  selectOutInCinemaMovies,
  selectPopularMovies,
  selectTopRatedMovies,
} from "../../redux/moviesdata/moviesdataSelector";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const Home = () => {
  const popularMoviesSelector = createSelector(
    [selectPopularMovies],
    (popularMovies) => popularMovies,
  );
  const topRatedMoviesSelector = createSelector(
    [selectTopRatedMovies],
    (topRatedMovies) => topRatedMovies,
  );
  const inCinemaMoviesSelector = createSelector(
    [selectOutInCinemaMovies],
    (upComingMovies) => upComingMovies,
  );
  const nowPlayingMoviesSelector = createSelector(
    [selectNowPlayingMovies],
    (nowPlaying) => nowPlaying,
  );
  const popularMovies = useSelector((state) => popularMoviesSelector(state));
  const topRatedMovies = useSelector((state) => topRatedMoviesSelector(state));
  const upComingMovies = useSelector((state) => inCinemaMoviesSelector(state));
  const nowPlayingMovies = useSelector((state) =>
    nowPlayingMoviesSelector(state),
  );
  return (
    <div className="home">
      <Carousel data={nowPlayingMovies} />
      <Section title="Popular" slice={true} number="8" data={popularMovies} />
      <Section
        title="Top Rated"
        slice={true}
        number="8"
        data={topRatedMovies}
      />
      <Section
        title="Coming soon to cinemas"
        slice={true}
        number="8"
        data={upComingMovies}
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
