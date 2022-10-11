import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import './slider.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination]);

const Slider = () => {
    return (
        <section id="tranding">
            <div className="container">
                <Swiper className="swiper tranding-slider"
                    effect={"coverflow"}
                    grabCursor={true}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    modules={[Pagination, EffectCoverflow]}
                >
                    <SwiperSlide>
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Tranding" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Tranding" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Tranding" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Tranding" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Tranding" />
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>

    )
}

export default Slider