import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Carousel.module.scss";
import "swiper/css";

const Carousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <Swiper></Swiper>
      </div>
    </div>
  );
};

export default Carousel;
