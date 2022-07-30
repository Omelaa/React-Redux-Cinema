import {Swiper, SwiperSlide} from "swiper/react";

import css from "./ReleasesSlider.module.scss";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import one from "../../assets/images/releases/wonder.png";
import two from "../../assets/images/releases/batman.png";
import three from "../../assets/images/releases/3.png";
import four from "../../assets/images/releases/4.png";
import five from "../../assets/images/releases/5.png";
import six from "../../assets/images/releases/6.png";

import {ReleasesSlide} from "../ReleasesSlide/ReleasesSlide";
import {Autoplay, Navigation} from "swiper";

const ReleasesSlider = () => {
    return (
        <section className={css.releases}>
            <div className={css.container}>
                <a className={css.category} href={'#'}>New releases</a>
                <ul className={css.releases__movies}>
                    <Swiper
                        slidesPerView={5.5}
                        spaceBetween={60}
                        navigation={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                        }}
                        modules={[Navigation, Autoplay]}
                    >
                        <SwiperSlide>
                            <ReleasesSlide img={one} name={"Wonder Woman 1984"} genre={"Fantasy"} rating={3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReleasesSlide img={two} name={"Zack Snyder's Justice League"} genre={"Fantasy"} rating={4}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReleasesSlide img={three} name={"Mortal Kombat"} genre={"Fantasy"} rating={5}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReleasesSlide img={four} name={"The Courier"} genre={"Drama"} rating={3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReleasesSlide img={five} name={"Thunder Force"} genre={"Action"} rating={5}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReleasesSlide img={six} name={'Peter Rabbit 2: The Runaway'} genre={'Family'} rating={4}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReleasesSlide img={two} name={"Zack Snyder's Justice League"} genre={"Fantasy"} rating={3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReleasesSlide img={three} name={"Mortal Kombat"} genre={"Fantasy"} rating={3}/>
                        </SwiperSlide>
                    </Swiper>
                </ul>
            </div>
        </section>
    );
};

export {ReleasesSlider};