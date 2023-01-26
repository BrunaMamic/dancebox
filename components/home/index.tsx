import { useEffect } from "react";
// import Swiper from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const SliderButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => swiper.slidePrev()}
      className="swiper-button-prev"
    ></div>
  );
};
const SliderButtonNext = () => {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => swiper.slideNext()}
      className="swiper-button-next"
    ></div>
  );
};

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="swiper home-slider">
        <Swiper spaceBetween={0} loop={true} slidesPerView={1}>
          {/* <SwiperSlide>
            <section
              className="swiper-slide slide"
              style={{ background: `url(static/naslovna5.jpg) no-repeat` }}
            >
              <div className="content">
                <h3>Plesni studio Dance Box</h3>
                <a href="#about" className="btn">
                  O nama
                </a>
              </div>
            </section>
          </SwiperSlide> */}
          <SwiperSlide>
            <section
              className="swiper-slide slide"
              style={{ background: "url(static/naslovna6.jpg) no-repeat" }}
            >
              <div className="content">
                <h3>Plesni studio Dance Box</h3>
                <a href="#about" className="btn">
                  O nama
                </a>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section
              className="swiper-slide slide"
              style={{ background: "url(static/naslovna2.jpg) no-repeat" }}
            >
              <div className="content">
                <h3>Plesni studio Dance Box</h3>
                <a href="#about" className="btn">
                  O nama
                </a>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section
              className="swiper-slide slide"
              style={{ background: "url(static/naslovna3.jpg) no-repeat" }}
            >
              <div className="content">
                <h3>Plesni studio Dance Box</h3>
                <a href="#about" className="btn">
                  O nama
                </a>
              </div>
            </section>
          </SwiperSlide>
          <SliderButtonNext />
          <SliderButtonPrev />
        </Swiper>
      </div>
    </section>
  );
};
export default Home;
