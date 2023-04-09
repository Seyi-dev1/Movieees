import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Placeholder from "../../movie/placeholder/Placeholder";
import "./video_card.scss";
const VideoCard = ({ videodata }) => {
  return (
    <div className="video_card">
      <LazyLoadImage
        src={videodata.image_link}
        alt={videodata.name}
        className="video_poster"
        placeholder={<Placeholder spinner_size="2rem" size="default" />}
      />
      <span className="video_name">{videodata.name}</span>
    </div>
  );
};

export default VideoCard;
