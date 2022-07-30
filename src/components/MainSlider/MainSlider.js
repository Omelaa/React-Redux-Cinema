import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import css from "./MainSlider.module.scss";

import {Autoplay, EffectFade, Navigation, Pagination} from "swiper";
import {MainSlide} from "../MainSlide/MainSlide";

const MainSlider = () => {
    return (
        <section className={css.mainScreen}>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, EffectFade, Autoplay]}
            >
                <SwiperSlide>
                    <MainSlide />
                </SwiperSlide>
                <SwiperSlide>
                    <MainSlide/>
                </SwiperSlide>
                <SwiperSlide>
                    <MainSlide/>
                </SwiperSlide>
                <SwiperSlide>
                    <MainSlide/>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};


export {MainSlider};
