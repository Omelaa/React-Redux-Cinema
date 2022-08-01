import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import css from "./ReleasesSlider.module.scss";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import {movieActions} from "../../redux";
import {ReleasesSlide} from "../ReleasesSlide/ReleasesSlide";
import {moviesCategories} from "../../services";


const ReleasesSlider = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movie);

    const {results} = movies;

    useEffect(() => {
        dispatch(movieActions.getAll({moviesType: moviesCategories.discover}));
    }, [dispatch]);

    return (
        <section className={css.releases}>
            <div className={css.container}>
                <a className={css.category} href={'#'}>New releases</a>
                <ul className={css.releases__movies}>
                    <Swiper
                        slidesPerView={5.5}
                        spaceBetween={60}
                        loop={true}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                        }}
                        modules={[Navigation, Autoplay]}
                    >
                        {
                            results && results.map((movie) =>
                                <SwiperSlide key={movie} virtualIndex={movie.id}>
                                    <ReleasesSlide key={movie.id} movie={movie}/>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </ul>
            </div>
        </section>
    );
};

export {ReleasesSlider};