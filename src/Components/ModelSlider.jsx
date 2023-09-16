import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import imageData from "./ImageData/ImageData";
import { useMediaQuery } from "react-responsive";
import "./modelSlider.css";
export default function Modelslideshow() {
  const isSmall = useMediaQuery({ query: "(max-width: 600px)" });
  const isMedium = useMediaQuery({ query: "(max-width: 800px)" });
  const isLarge = useMediaQuery({ query: "(max-width: 1000px)" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex); // Using realIndex to account for loop
  };
  console.log(imageData);
  return (
    <section className="mySwiper-container">
      <Swiper
        slidesPerView={isSmall ? 1 : isMedium ? 2 : isLarge ? 3 : 4}
        spaceBetween={isSmall ? 0 : isMedium ? 10 : isLarge ? 20 : 30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          console.log(swiper);
        }}
        onSlideChange={handleSlideChange}
      >
        {imageData.map((model) => (
          <SwiperSlide key={model.id}>
            <div className="slide-container">
              <img src={model.src} alt={model.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
