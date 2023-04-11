import React from "react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import "./movie.scss";
import Placeholder from "./placeholder/Placeholder";
const Movie = ({ ...moviedata }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();
  const [data, setData] = useState({ moviedata });
  return (
    <div className="movie_container">
      <LazyLoadImage
        src={imagePath + moviedata.poster_path}
        alt={moviedata.title}
        className="poster"
        placeholder={<Placeholder spinner_size="4em" size="placeholder" />}
      />
      <div className="info">
        <span className="title line-clamp-1">{moviedata.title}</span>
        <span className="rating">
          <AiFillStar className="star" />
          {moviedata.vote_average}/10
        </span>
      </div>

      <span
        className="movie_link"
        onClick={() => {
          navigate(`/movies/${moviedata.title}`, { state: { data } });
        }}
      >
        VIEW
      </span>
    </div>
  );
};

export default Movie;
