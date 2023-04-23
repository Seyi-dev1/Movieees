import "./carousel_movie.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Placeholder from "../../movie/placeholder/Placeholder";
import { FaHeart, FaPlay } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { addToHistory } from "../../../redux/history/historyReducer";
import { useDispatch } from "react-redux";

import { selectCurrentUser } from "../../../redux/user/userSelector";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
export const CarouselMovie = ({ ...moviedata }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const [data, setData] = useState({ moviedata });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userSelector = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser,
  );
  const user = useSelector((state) => userSelector(state));
  return (
    <div className="carousel_movie">
      <div className="info_con">
        <div className="top">
          <span className="movie_title">{moviedata.title}</span>
        </div>
        <div className="middle">
          <span className="icon_con">
            <span className="icon">
              <FaHeart />
            </span>
            Add to watchlist
          </span>
          <span className="icon_con">
            <a
              className="icon"
              href={`https://www.youtube.com/results?search_query=${moviedata.title}`}
              target="_blank"
            >
              <FaPlay />
            </a>
            WATCH TRAILER
          </span>
        </div>
        <div className="bottom">
          <span className="rating">
            <AiFillStar className="star" />
            {moviedata.vote_average}/<span className="ten">10</span>
          </span>
          <span className="release_year">
            Rating: {moviedata.adult ? "18+" : "For all"}
          </span>
          <span className="release_year">
            Release: {moviedata.release_date}
          </span>
        </div>
        {user ? (
          <span
            onClick={() => {
              navigate(`/movies/${moviedata.title}`, { state: { data } });
              dispatch(addToHistory());
            }}
            className="carousel_btn"
          >
            See More
          </span>
        ) : (
          <span
            onClick={() => {
              alert("oops! login to continue your Journey!");
              navigate("/login");
            }}
            className="carousel_btn"
          >
            See More
          </span>
        )}
      </div>
      <div className="backdrop_con">
        <LazyLoadImage
          src={imagePath + moviedata.poster_path}
          alt={moviedata.title}
          className="poster"
          placeholder={<Placeholder spinner_size="2rem" size="default" />}
        />
      </div>
    </div>
  );
};
