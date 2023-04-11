import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "../movie/Movie";
import "./section.scss";
import { useNavigate } from "react-router-dom";

const Section = ({ title, sort, slice, number }) => {
  const [data, setData] = useState([]);
  const [sectiontitle, setSectiontitle] = useState({ title });
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${sort}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`,
    )
      .then((response) => response.json())
      .then((apiData) => setData(apiData.results));
  }, [data]);

  return (
    <div className="section">
      <div className="section_title">
        <span className="sectionTitle">#{title}🔥</span>
        <span
          onClick={() => {
            navigate(`/movies/section/${title}`, {
              state: { data, sectiontitle },
            });
          }}
          className="view_all"
        >
          VIEW ALL {">"}
        </span>
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
