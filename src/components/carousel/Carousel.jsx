import "./carousel.scss";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { CarouselMovie } from "./carousel-movie/CarouselMovie";

const Carousel = ({ sort }) => {
  const [carouselData, setCarouselData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${sort}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`,
    )
      .then((response) => response.json())
      .then((apiData) => setCarouselData(apiData.results));
  }, []);
  return (
    <div className="carousel_container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // modules={[Navigation, A11y, Autoplay]}
        navigation
        className="swiper"
        // autoplay={{ delay: 6000, disableOnInteraction: false }}
      >
        {carouselData.map((moviedata) => (
          <SwiperSlide key={moviedata.id} className="swiper_slide">
            <CarouselMovie {...moviedata} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
