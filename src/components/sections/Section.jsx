import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "../movie/Movie";
import "./section.scss";

const Section = ({ title, sort, slice, number }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${sort}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`,
    )
      .then((response) => response.json())
      .then((apiData) => setData(apiData.results));
  }, []);

  return (
    <div className="section">
      <div className="section_title">
        <span className="sectionTitle">#{title}🔥</span>
        <Link to="/movies" className="view_all">
          VIEW ALL {">"}{" "}
        </Link>
      </div>
      <div className="movie_list">
        {slice
          ? data
              .slice(2, `${number}`)
              .map((moviedata) => <Movie key={moviedata.id} {...moviedata} />)
          : data.map((moviedata) => (
              <Movie key={moviedata.id} {...moviedata} />
            ))}
      </div>
    </div>
  );
};

export default Section;
