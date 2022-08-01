import {useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {useDispatch, useSelector} from "react-redux";
import {Autoplay, Navigation, Pagination} from "swiper";

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import css from "./MainSlider.module.scss";

import {MainSlide} from "../MainSlide/MainSlide";
import {movieActions} from "../../redux";
import {moviesCategories} from "../../services";

const MainSlider = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movie);

    const {results} = movies;

    useEffect(() => {
        dispatch(movieActions.getAll({moviesType: moviesCategories.topRated}));
    }, [dispatch]);

    return (
        <section className={css.mainScreen}>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3500,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
            >
                {
                    results && results.map((movie) =>
                        <SwiperSlide key={movie} virtualIndex={movie.id}>
                            <MainSlide key={movie.id} movie={movie}/>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    );
};


export {MainSlider};
