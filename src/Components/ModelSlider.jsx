import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function ModelSlider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="../images/durant.webp" alt="Kevin Durant" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../images/basketballplayer.webp"
          alt="A player dunking the ball"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../images/femalePlayer.webp"
          alt="A girl sitting with basketball"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../images/femalePlayer2.webp" alt="A girl with basketball" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../images/kidsBasketball.jpg" alt="Kid with basketball" />
      </SwiperSlide>
      ...
    </Swiper>
  );
}

export default ModelSlider;
