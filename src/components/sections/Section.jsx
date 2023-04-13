import React, { useState } from "react";
import Movie from "../movie/Movie";
import "./section.scss";
import { useNavigate } from "react-router-dom";

const Section = ({ title, slice, number, data }) => {
  const [sectiontitle, setSectiontitle] = useState({ title });

  const navigate = useNavigate();
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
