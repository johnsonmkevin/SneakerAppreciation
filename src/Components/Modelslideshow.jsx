import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function Modelslideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex); // Using realIndex to account for loop
  };

  const images = [
    "images/womenWithBall.jpg",
    "images/guysShootingBall.jpg",
    "images/girlsWithBasketBall.jpg",
    "images/girlWithAttitude2.jpg",
    "images/girlWithAttitude.jpg",
    "images/guyWithBall.jpg",
  ];

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper customSwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          console.log(swiper);
        }}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <img src={images[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[4]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
