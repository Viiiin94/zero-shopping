import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./Carousel.module.scss";
import CarouselBox from "./CarouselBox";

import Levis from "../../assets/levis.jpeg";

const Carousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={() => {}}
          onSlideChange={() => {}}
        >
          <SwiperSlide>
            <CarouselBox
              image={Levis}
              title="의류"
              description="옷을 사고싶다고?"
              navigation="fashion"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselBox
              image="1"
              title="전자기기"
              description="전자기기"
              navigation="digital"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselBox
              image="1"
              title="식품코너"
              description="추석이다"
              navigation="market"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
