import { Rating, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaCreditCard, FaHeart, FaPlay, FaShareAlt } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLocation } from "react-router-dom";
import Placeholder from "../../components/movie/placeholder/Placeholder";
import "./single.scss";
import Share from "../../components/share/Share";
import Section from "../../components/sections/Section";
import { selectNowPlayingMovies } from "../../redux/moviesdata/moviesdataSelector";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const Single = () => {
  const location = useLocation();
  const imagePath = "https://image.tmdb.org/t/p/original";
  const [value, setValue] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nowPlayingMoviesSelector = createSelector(
    [selectNowPlayingMovies],
    (nowPlaying) => nowPlaying,
  );
  const nowPlayingMovies = useSelector((state) =>
    nowPlayingMoviesSelector(state),
  );
  return (
    <div className="single_con">
      <div className="single">
        <div className="movie_jpg_con">
          <LazyLoadImage
            src={imagePath + location.state.data.moviedata.poster_path}
            alt={location.state.data.moviedata.title}
            className="jpg"
            placeholder={<Placeholder spinner_size="4em" size="default" />}
          />

          <div className="movie_btns">
            <a
              className="movie_btn bg-red-600"
              href={`https://www.youtube.com/results?search_query=${location.state.data.moviedata.title}`}
              target="_blank"
            >
              <FaPlay /> WATCH TRAILER
            </a>
            <button className="movie_btn bg-yellow-400">
              <FaCreditCard /> BUY TICKET
            </button>
          </div>
        </div>

        <div className="movie_information">
          <span className="movie_title">
            {location.state.data.moviedata.title}{" "}
            <span className="year">
              {location.state.data.moviedata.release_date}
            </span>
          </span>
          <div className="middle">
            <span className="icon_con">
              <span className="icon">
                <FaHeart />
              </span>
              Add to Watchlist
            </span>
            <span className="icon_con">
              <span className="icon">
                <FaShareAlt />
              </span>
              <Share />
            </span>
          </div>
          <div className="bottom">
            <span className="rating">
              <AiFillStar className="star" />
              {location.state.data.moviedata.vote_average}/
              <span className="ten">10</span>
            </span>
            <span className="release_year">
              Rating: {location.state.data.moviedata.adult ? "18+" : "For all"}
            </span>
            <Typography component="legend" className="release_year">
              Rate this movie:
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              precision={0.5}
              size="large"
              emptyIcon={
                <AiOutlineStar
                  style={{ opacity: 0.55 }}
                  color="#fff"
                  fontSize="inherit"
                />
              }
            />
          </div>
          <LazyLoadImage
            src={imagePath + location.state.data.moviedata.backdrop_path}
            alt={location.state.data.moviedata.title}
            className="big_jpg"
            placeholder={<Placeholder spinner_size="4em" size="wide" />}
          />

          <span className="overview">
            {location.state.data.moviedata.overview}
          </span>
        </div>
      </div>
      <Section
        title="Movies you may like"
        slice={true}
        number="17"
        data={nowPlayingMovies}
      />
    </div>
  );
};

export default Single;
