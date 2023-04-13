import "./carousel.scss";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { CarouselMovie } from "./carousel-movie/CarouselMovie";

const Carousel = ({ data }) => {
  return (
    <div className="carousel_container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, A11y, Autoplay]}
        navigation
        className="swiper"
        autoplay={{ delay: 10000, disableOnInteraction: true }}
      >
        {data.map((moviedata) => (
          <SwiperSlide key={moviedata.id} className="swiper_slide">
            <CarouselMovie {...moviedata} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
