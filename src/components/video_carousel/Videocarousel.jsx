import "./videocarousel.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import VideoCard from "./video_card/VideoCard";
import Beauty from "../../assets/video_jpegs/beauty.jpg";
import Fastnfurious from "../../assets/video_jpegs/fastnfurious.jpg";
import Wonder from "../../assets/video_jpegs/wonder.jpg";
import Oblivion from "../../assets/video_jpegs/Oblivion.jpg";
import Skull from "../../assets/video_jpegs/skull_island.jpg";
import Conjuring from "../../assets/video_jpegs/conjuring.jpg";
const Videocarousel = () => {
  const videoData = [
    {
      id: 1,
      name: "Beauty and the Beast: Official Teaser Trailer 2",
      embedded_link: "https://www.youtube.com/embed/OvW_L8sTu5E",
      image_link: Beauty,
    },
    {
      id: 2,
      name: "Fast and Furious 8",
      embedded_link: "https://www.youtube.com/embed/HZ7PAyCDwEg",
      image_link: Fastnfurious,
    },
    {
      id: 3,
      name: "Wonder Woman 1984",
      embedded_link: "https://www.youtube.com/embed/sfM7_JLk-84",
      image_link: Wonder,
    },
    {
      id: 4,
      name: "Oblivion: Official Teaser Trailer",
      embedded_link: "https://www.youtube.com/embed/tx6_JMDFfWI",
      image_link: Oblivion,
    },
    {
      id: 5,
      name: "Skull Island: Exclusive Interview",
      embedded_link: "https://www.youtube.com/embed/44LdLqgOpjo",
      image_link: Skull,
    },
    {
      id: 6,
      name: "Conjuring 4: Official Trailer",
      embedded_link: "https://www.youtube.com/embed/FiZM3x7q46I",
      image_link: Conjuring,
    },
  ];
  const [embed, setEmbed] = React.useState(
    "https://www.youtube.com/embed/OvW_L8sTu5E",
  );
  return (
    <div className="video_carousel">
      <div className="video">
        <iframe
          width="560"
          height="315"
          src={embed}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="youtube"
        ></iframe>
      </div>
      <Swiper
        direction={"vertical"}
        spaceBetween={25}
        slidesPerView={4}
        modules={[Navigation, A11y]}
        navigation
        className="swiper"
      >
        {videoData.map((videodata) => (
          <SwiperSlide
            onClick={() => setEmbed(videodata.embedded_link)}
            key={videodata.id}
            className="video_swiper_slide"
          >
            <VideoCard videodata={videodata} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Videocarousel;
