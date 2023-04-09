import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LEONARDO from "./assets_celeb/LeonardoDiCaprio.jpg";
import CHRISEVANS from "./assets_celeb/chrisevans.jpg";
import DENZEL from "./assets_celeb/denzel.jpeg";
import BRADPITT from "./assets_celeb/bradpitt.jpg";
import Placeholder from "../movie/placeholder/Placeholder";
import "./celebrities.scss";
const Celebrities = () => {
  return (
    <div className="celebrities">
      <span className="title">SPOTLIGHT CELEBRITIES</span>
      <hr className="hr" />
      <div className="celeb_con">
        <LazyLoadImage
          src={LEONARDO}
          alt="leonardo"
          className="celeb_image"
          placeholder={<Placeholder spinner_size="4em" size="default" />}
        />
        <div className="celeb_info">
          <span className="celeb_name">Leonardo DiCaprio</span>
          <span className="celeb_title">ACTOR</span>
        </div>
      </div>
      <div className="celeb_con">
        <LazyLoadImage
          src={DENZEL}
          alt="denzel washinton"
          className="celeb_image"
          placeholder={<Placeholder spinner_size="4em" size="default" />}
        />
        <div className="celeb_info">
          <span className="celeb_name">Denzel Washington</span>
          <span className="celeb_title">ACTOR</span>
        </div>
      </div>
      <div className="celeb_con">
        <LazyLoadImage
          src={CHRISEVANS}
          alt="chris evans"
          className="celeb_image"
          placeholder={<Placeholder spinner_size="4em" size="default" />}
        />
        <div className="celeb_info">
          <span className="celeb_name">Chris Evans</span>
          <span className="celeb_title">ACTOR</span>
        </div>
      </div>
      <div className="celeb_con">
        <LazyLoadImage
          src={BRADPITT}
          alt="brad pitt"
          className="celeb_image"
          placeholder={<Placeholder spinner_size="2em" size="default" />}
        />
        <div className="celeb_info">
          <span className="celeb_name">Brad Pitt</span>
          <span className="celeb_title">ACTOR</span>
        </div>
      </div>
    </div>
  );
};

export default Celebrities;
