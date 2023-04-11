import React, { useEffect } from "react";
import "./movies.scss";
import { useLocation } from "react-router-dom";
import Movie from "../../components/movie/Movie";
const Movies = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="movies">
      <span className="movies_title">
        {location.state.sectiontitle.title}🔥
      </span>
      <div className="movie_list">
        {location.state.data.map((moviedata) => (
          <Movie key={moviedata.id} {...moviedata} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
