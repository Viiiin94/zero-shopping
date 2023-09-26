import CarouselBox from "./CarouselBox";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import GQ from "../../assets/gq.webp";
import Mac from "../../assets/macbook.jpg";
import Market from "../../assets/market.jpeg";

import styles from "./Carousel.module.scss";

const Carousel = () => {
  return (
    <article className={styles.wrapper}>
      <section className={styles.section}>
        <Swiper
          modules={[Navigation, A11y, Autoplay, EffectFade]}
          effect={"fade"}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
        >
          <SwiperSlide>
            <CarouselBox
              image={GQ}
              title="의류"
              description="옷을 사고싶다고?"
              navigation="fashion"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselBox
              image={Mac}
              title="전자제품"
              description="새로운 맥북을 구매하세요"
              navigation="digital"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselBox
              image={Market}
              title="식품코너"
              description="추석이다"
              navigation="market"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </article>
  );
};

export default Carousel;
