import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

import css from "./ShowsSlider.module.scss";

import one from '../../assets/images/shows/1.png';
import two from '../../assets/images/shows/2.png';
import three from '../../assets/images/shows/33.png';

import {ShowsSlide} from "../ShowsSlide/ShowsSlide";

const ShowsSlider = () => {
    return (
        <section className={css.shows}>
            <div className={css.container}>
                <a className={css.category} href="#">
                    Featured TV shows
                </a>
                <ul className={`${css.shows__movies} ${css.releases__movies}`}>
                    <Swiper
                            loop={true}
                            navigation={true}
                            slidesPerView={3.1}
                            modules={[Navigation]}>

                        <SwiperSlide>
                            <ShowsSlide img={one} name={"Game of thrones"} genre={"Sci-Fi & Fantasy"} rating={4}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ShowsSlide img={two} name={"The Falcon and the Winter Soldier"} genre={"Sci-Fi & Fantasy"} rating={3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ShowsSlide img={three} name={"WandaVision"} genre={"Sci-Fi & Fantasy"} rating={5}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ShowsSlide img={two} name={"The Falcon and the Winter Soldier"} genre={"Sci-Fi & Fantasy"} rating={3}/>
                        </SwiperSlide>
                    </Swiper>
                </ul>
            </div>
        </section>
    );
};

export {ShowsSlider};