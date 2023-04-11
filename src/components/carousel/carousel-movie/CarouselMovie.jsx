import "./carousel_movie.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Placeholder from "../../movie/placeholder/Placeholder";
import { FaHeart, FaPlay, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
export const CarouselMovie = ({ ...moviedata }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const [data, setData] = useState({ moviedata });
  const navigate = useNavigate();
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
            Add to favourites
          </span>
          <span className="icon_con">
            <span className="icon">
              <FaPlay />
            </span>
            Watch trailer
          </span>
          <span className="icon_con">
            <span className="icon">
              <FaShareAlt />
            </span>
            Share
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
        <span
          onClick={() => {
            navigate(`/movies/${moviedata.title}`, { state: { data } });
          }}
          className="carousel_btn"
        >
          See More
        </span>
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
